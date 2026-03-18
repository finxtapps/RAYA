import basket_icon from "./basket_icon.png";
import header_img from "./header_img.png";
import logo from "./logo.png";
import menu_1 from "./menu_1.png";
import menu_2 from "./menu_2.png";
import menu_3 from "./menu_3.png";
import menu_4 from "./menu_4.png";
import menu_5 from "./menu_5.png";
import menu_6 from "./menu_6.png";
import menu_7 from "./menu_7.jpeg";
import search_icon from "./search_icon.png";

import food_1 from "./food_1.png";
import food_10 from "./food_10.png";
import food_11 from "./food_11.png";
import food_12 from "./food_12.png";
import food_13 from "./food_13.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";
import food_8 from "./food_8.png";
import food_9 from "./food_9.png";

import add_icon_green from "./add_icon_green.png";
import add_icon_white from "./add_icon_white.png";
import app_store from "./app_store.png";
import bag_icon from "./bag_icon.png";
import cross_icon from "./cross_icon.png";
import facebook_icon from "./facebook_icon.png";
import linkedin_icon from "./linkedin_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";
import play_store from "./play_store.png";
import profile_icon from "./profile_icon.png";
import rating_starts from "./rating_starts.png";
import remove_icon_red from "./remove_icon_red.png";
import selector_icon from "./selector_icon.png";
import twitter_icon from "./twitter_icon.png";

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const menu_list = [
  {
    menu_name: "Sunday",
    menu_image: menu_7,
  },
  {
    menu_name: "Monday",
    menu_image: menu_1,
  },
  {
    menu_name: "Tuesday",
    menu_image: menu_2,
  },
  {
    menu_name: "Wednesday",
    menu_image: menu_3,
  },
  {
    menu_name: "Thursday",
    menu_image: menu_4,
  },
  {
    menu_name: "Friday",
    menu_image: menu_5,
  },
  {
    menu_name: "Saturday",
    menu_image: menu_6,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Veg Biriyani + Bondi Raita",
    image: food_1,
    price: 79,
    description: "Veg Biriyani + Bondi Raita",
    category: "Sunday",
    mealType: "Lunch",
  },
  {
    _id: "2",
    name: "Chole chawal",
    image: food_2,
    price: 79,
    description: "Chole chawal",
    category: "Monday",
    mealType: "Lunch",
  },
  {
    _id: "3",
    name: "Mix veg curry + 5pcs butter roti",
    image: food_3,
    price: 79,
    description: "Mix veg curry + 5pcs butter roti 🫓",
    category: "Monday",
    mealType: "Dinner",
  },
  {
    _id: "4",
    name: "Dal tadka and rice",
    image: food_4,
    price: 79,
    description: "Dal tadka and rice🍛",
    category: "Tuesday",
    mealType: "Lunch",
  },
  {
    _id: "5",
    name: "Mushroom + 5pcs butter roti",
    image: food_5,
    price: 79,
    description: "Mushroom + 5pcs butter roti",
    category: "Tuesday",
    mealType: "Dinner",
  },
  {
    _id: "6",
    name: "Rajma and Rice",
    image: food_6,
    price: 79,
    description: "Rajma and Rice🍛",
    category: "Wednesday",
    mealType: "Lunch",
  },
  {
    _id: "7",
    name: "Bhindi Masala + 5 Pcs butter roti",
    image: food_7,
    price: 79,
    description: "Bhindi Masala + 5 Pcs butter roti",
    category: "Wednesday",
    mealType: "Dinner",
  },
  {
    _id: "8",
    name: "Dal Makhani + Rice",
    image: food_8,
    price: 79,
    description: "Dal Makhani + Rice 🍛",
    category: "Thursday",
    mealType: "Lunch",
  },
  {
    _id: "9",
    name: "Paneer Masala + 5 Pcs butter roti",
    image: food_9,
    price: 79,
    description: "Paneer Masala + 5 Pcs butter roti",
    category: "Thursday",
    mealType: "Dinner",
  },
  {
    _id: "10",
    name: "Kofte + Chawal",
    image: food_10,
    price: 79,
    description: "Kofte + Chawal 🍛",
    category: "Friday",
    mealType: "Lunch",
  },
  {
    _id: "11",
    name: "Chhole Matar + 4 Pcs Parathe",
    image: food_11,
    price: 79,
    description: "Chhole Matar + 4 Pcs Parathe",
    category: "Friday",
    mealType: "Dinner",
  },
  {
    _id: "12",
    name: "Kala chana aalo ki sabji + chawal + salad",
    image: food_12,
    price: 79,
    description: "Kala chana aalo ki sabji + chawal 🍛 + salad",
    category: "Saturday",
    mealType: "Lunch",
  },
  {
    _id: "13",
    name: "Butter Paneer + Rice",
    image: food_13,
    price: 79,
    description: "Butter Paneer + Rice 🍛",
    category: "Saturday",
    mealType: "Dinner",
  },
];

export const mealPlan = [
  {
    day: "Sunday",
    price: 79,
    meals: [
      {
        type: "Lunch",
        items: "Veg Biriyani + Bondi Raita",
      },
    ],
  },
  {
    day: "Monday",
    price: 79,
    meals: [
      {
        type: "Lunch",
        items: "Chole chawal",
      },
      {
        type: "Dinner",
        items: "Mix veg curry + 5 pcs butter roti 🫓",
      },
    ],
  },
  {
    day: "Tuesday",
    price: 79,
    meals: [
      {
        type: "Lunch",
        items: "Dal tadka and rice 🍛",
      },
      {
        type: "Dinner",
        items: "Mushroom + 5 pcs butter roti",
      },
    ],
  },
  {
    day: "Wednesday",
    price: 79,
    meals: [
      {
        type: "Lunch",
        items: "Rajma and Rice 🍛",
      },
      {
        type: "Dinner",
        items: "Bhindi Masala + 5 pcs butter roti",
      },
    ],
  },
  {
    day: "Thursday",
    price: 79,
    meals: [
      {
        type: "Lunch",
        items: "Dal Makhani + Rice 🍛",
      },
      {
        type: "Dinner",
        items: "Paneer Masala + 5 pcs butter roti",
      },
    ],
  },
  {
    day: "Friday",
    price: 79,
    meals: [
      {
        type: "Lunch",
        items: "Kofte + Chawal 🍛",
      },
      {
        type: "Dinner",
        items: "Chhole Matar + 4 pcs Parathe",
      },
    ],
  },
  {
    day: "Saturday",
    price: 79,
    meals: [
      {
        type: "Lunch",
        items: "Kala chana aalo ki sabji + chawal 🍛 + salad",
      },
      {
        type: "Dinner",
        items: "Butter Paneer + Rice 🍛",
      },
    ],
  },
];
