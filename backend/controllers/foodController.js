import fs from "fs";
import foodModel from "../models/foodModel.js";

// add food items
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    mealType: req.body.mealType,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    // Ensure all foods have mealType (default to Lunch if missing)
    const foodsWithMealType = foods.map((food) => {
      const foodObj = food.toObject ? food.toObject() : food;
      return {
        ...foodObj,
        mealType: foodObj.mealType || "Lunch",
      };
    });
    res.json({ success: true, data: foodsWithMealType });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// rate food item
const rateFood = async (req, res) => {
  try {
    const { foodId, userId, rating } = req.body;
    
    // Find the food item
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.json({ success: false, message: "Food item not found" });
    }

    // Check if user already rated
    const existingRatingIndex = food.ratings.findIndex(r => r.userId === userId);
    
    if (existingRatingIndex !== -1) {
      // Update existing rating
      food.ratings[existingRatingIndex].rating = rating;
    } else {
      // Add new rating
      food.ratings.push({ userId, rating });
    }

    // Recalculate average rating
    const totalRating = food.ratings.reduce((sum, item) => sum + item.rating, 0);
    food.averageRating = totalRating / food.ratings.length;

    await food.save();
    
    res.json({ success: true, message: "Rating saved successfully", averageRating: food.averageRating });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood, rateFood };
