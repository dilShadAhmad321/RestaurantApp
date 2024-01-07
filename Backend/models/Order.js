import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      required: true,
    },

    Rava_Upma: {
      type: Number,
      required: false,
    },
    Semiya_Upma: {
      type: Number,
      required: false,
    },
    Rava_Idli: {
      type: Number,
      required: false,
    },
    Coconut_Idli: {
      type: Number,
      required: false,
    },
    Rava_Dosa: {
      type: Number,
      required: false,
    },
    Coconut_Dosa: {
      type: Number,
      required: false,
    },
    Onion_Dosa: {
      type: Number,
      required: false,
    },
    Dadpe_Pohe: {
      type: Number,
      required: false,
    },
    Gujarati_Methi_Thepla: {
      type: Number,
      required: false,
    },
    Chicken_Sandwitch: {
      type: Number,
      required: false,
    },
    Chai_Biscuit: {
      type: Number,
      required: false,
    },
    Samosa: {
      type: Number,
      required: false,
    },
    Veg_Pasta: {
      type: Number,
      required: false,
    },
    Chicken_Pasta: {
      type: Number,
      required: false,
    },
    Veg_Chowmin: {
      type: Number,
      required: false,
    },
    Chicken_Chowmin: {
      type: Number,
      required: false,
    },
    Aloo_Paratha: {
      type: Number,
      required: false,
    },
    Jalebi: {
      type: Number,
      required: false,
    },
    Lassi: {
      type: Number,
      required: false,
    },

    Chicken_biryani: {
      type: Number,
      required: false,
    },
    Mutton_biryani: {
      type: Number,
      required: false,
    },
    Veg_Pulao: {
      type: Number,
      required: false,
    },
    Egg_Rice: {
      type: Number,
      required: false,
    },
    Chicken_Rice: {
      type: Number,
      required: false,
    },
    Chicken_Leg_Gravy: {
      type: Number,
      required: false,
    },
    Butter_Chicken: {
      type: Number,
      required: false,
    },
    Mutton_Chap: {
      type: Number,
      required: false,
    },
    Chicken_Chap: {
      type: Number,
      required: false,
    },
    Fried_Rice_Baby_Corn_Manchurian: {
      type: Number,
      required: false,
    },
    Fried_Rice_Gobi_65: {
      type: Number,
      required: false,
    },
    Rice_Dal: {
      type: Number,
      required: false,
    },
    Salad: {
      type: Number,
      required: false,
    },

    Naan: {
      type: Number,
      required: false,
    },
    Buttrer_Naan: {
      type: Number,
      required: false,
    },
    Chicken_Curry: {
      type: Number,
      required: false,
    },
    Chicken_Khorma: {
      type: Number,
      required: false,
    },
    Handi_Chicken: {
      type: Number,
      required: false,
    },
    Chilli_Paneer: {
      type: Number,
      required: false,
    },
    Paneer_Butter_Masala: {
      type: Number,
      required: false,
    },
    Paneer_Curry: {
      type: Number,
      required: false,
    },
    Handi_Chicken_with_Egg: {
      type: Number,
      required: false,
    },
    Egg_Curry: {
      type: Number,
      required: false,
    },
    Malai_Chicken: {
      type: Number,
      required: false,
    },
    Tawa_Chicken: {
      type: Number,
      required: false,
    },
    Tawa_Paneer: {
      type: Number,
      required: false,
    },
    Chicken_Lababdaar: {
      type: Number,
      required: false,
    },
    Paneer_Lababdar: {
      type: Number,
      required: false,
    },
    Butter_Chicken_Breast: {
      type: Number,
      required: false,
    },
    Chicken_Thai: {
      type: Number,
      required: false,
    },
    Mughlai_Chicken: {
      type: Number,
      required: false,
    },
    Mughlai_Paneer: {
      type: Number,
      required: false,
    },

    Vanilla_Cake: {
      type: Number,
      required: false,
    },
    Chocolate_Cake: {
      type: Number,
      required: false,
    },
    White_Forest: {
      type: Number,
      required: false,
    },
    Black_Forest_Cake: {
      type: Number,
      required: false,
    },
    Red_Velvet_Cake: {
      type: Number,
      required: false,
    },
    Blue_Berry_Cake: {
      type: Number,
      required: false,
    },
    Hot_Chocolate_Drink: {
      type: Number,
      required: false,
    },
    Butterscotch_Milkshake: {
      type: Number,
      required: false,
    },
    Kitkat_Shake: {
      type: Number,
      required: false,
    },
    Oreo_Shake: {
      type: Number,
      required: false,
    },
    Mango_Milkshake: {
      type: Number,
      required: false,
    },
    Sf_Special_Moktail: {
      type: Number,
      required: false,
    },
    Soft_Drink: {
      type: Number,
      required: false,
    },
  },
  { timestamps: false }
);

export default mongoose.model("Order_list", orderSchema);
