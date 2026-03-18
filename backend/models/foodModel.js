import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  mealType: { type: String, default: "Lunch" },
  ratings: [{
    userId: { type: String, required: true },
    rating: { type: Number, required: true }
  }],
  averageRating: { type: Number, default: 0 }
});

const foodModel = mongoose.models.food || mongoose.model("foods", foodSchema);

export default foodModel;
