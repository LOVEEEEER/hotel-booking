const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    birth: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female", "other"],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = model("User", schema);
