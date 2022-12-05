const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    pageId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = model("Comment", schema);
