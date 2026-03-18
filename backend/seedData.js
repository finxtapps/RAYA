import "dotenv/config";
import connectDB from "./config/db.js";
import foodModel from "./models/foodModel.js";

const seedFoods = [
  {
    name: "Veg Biriyani + Bondi Raita",
    description: "Veg Biriyani + Bondi Raita",
    price: 79,
    category: "Sunday",
    mealType: "Lunch",
    image: "veg_biriyani.jpg",
  },
  {
    name: "Chole chawal",
    description: "Chole chawal",
    price: 79,
    category: "Monday",
    mealType: "Lunch",
    image: "chole_chawal.jpg",
  },
  {
    name: "Mix veg curry + 5pcs butter roti",
    description: "Mix veg curry + 5pcs butter roti 🫓",
    price: 79,
    category: "Monday",
    mealType: "Dinner",
    image: "mix_veg_curry.jpg",
  },
  {
    name: "Dal tadka and rice",
    description: "Dal tadka and rice🍛",
    price: 79,
    category: "Tuesday",
    mealType: "Lunch",
    image: "dal_tadka.jpg",
  },
  {
    name: "Mushroom + 5pcs butter roti",
    description: "Mushroom + 5pcs butter roti",
    price: 79,
    category: "Tuesday",
    mealType: "Dinner",
    image: "mushroom_roti.jpg",
  },
  {
    name: "Rajma and Rice",
    description: "Rajma and Rice🍛",
    price: 79,
    category: "Wednesday",
    mealType: "Lunch",
    image: "rajma_rice.jpg",
  },
  {
    name: "Bhindi Masala + 5 Pcs butter roti",
    description: "Bhindi Masala + 5 Pcs butter roti",
    price: 79,
    category: "Wednesday",
    mealType: "Dinner",
    image: "bhindi_masala.jpg",
  },
  {
    name: "Dal Makhani + Rice",
    description: "Dal Makhani + Rice 🍛",
    price: 79,
    category: "Thursday",
    mealType: "Lunch",
    image: "dal_makhani.jpg",
  },
  {
    name: "Paneer Masala + 5 Pcs butter roti",
    description: "Paneer Masala + 5 Pcs butter roti",
    price: 79,
    category: "Thursday",
    mealType: "Dinner",
    image: "paneer_masala.jpg",
  },
  {
    name: "Kofte + Chawal",
    description: "Kofte + Chawal 🍛",
    price: 79,
    category: "Friday",
    mealType: "Lunch",
    image: "kofte_chawal.jpg",
  },
  {
    name: "Chhole Matar + 4 Pcs Parathe",
    description: "Chhole Matar + 4 Pcs Parathe",
    price: 79,
    category: "Friday",
    mealType: "Dinner",
    image: "chhole_matar.jpg",
  },
  {
    name: "Kala chana aalo ki sabji + chawal + salad",
    description: "Kala chana aalo ki sabji + chawal 🍛 + salad",
    price: 79,
    category: "Saturday",
    mealType: "Lunch",
    image: "kala_chana.jpg",
  },
  {
    name: "Butter Paneer + Rice",
    description: "Butter Paneer + Rice 🍛",
    price: 79,
    category: "Saturday",
    mealType: "Dinner",
    image: "butter_paneer.jpg",
  },
];

async function seedDatabase() {
  try {
    await connectDB();
    console.log("Connected to database");

    // Clear existing foods
    await foodModel.deleteMany({});
    console.log("Cleared existing foods");

    // Insert seed data
    await foodModel.insertMany(seedFoods);
    console.log("Seed data inserted successfully");

    // Show what was inserted
    const allFoods = await foodModel.find({});
    console.log("Total foods in database:", allFoods.length);
    console.log("Foods by day:");
    const byDay = {};
    allFoods.forEach((food) => {
      if (!byDay[food.category]) byDay[food.category] = [];
      byDay[food.category].push(`${food.name} (${food.mealType})`);
    });
    Object.keys(byDay).forEach((day) => {
      console.log(`  ${day}: ${byDay[day].join(", ")}`);
    });

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
