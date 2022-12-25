const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    pageId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    text: {
      type: String,
    },
    rate: {
      type: Number,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    answerOn: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = model("Comment", schema);
