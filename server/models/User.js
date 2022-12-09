const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    birth: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
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
