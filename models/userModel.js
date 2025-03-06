const { select } = require("framer-motion/client");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email is required!"],
      trim: true,
      unique: [true, "Email must be unique!"],
      minLength: [5, "Email must have 5 character!"],
      lowercase: true,
    },
    password: {
      type: String,
      require: [true, "Password is required!"],
      trim: true,
      select: false,
      minLength: [5, "Password must have 5 character!"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      default: false,
    },
    verificationCodeValidation: {
      type: String,
      default: false,
    },
    forgotPasswordCode: {
      type: String,
      default: false,
    },
    forgotPasswordCodeValidation: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
