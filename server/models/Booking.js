const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    departure: {
      type: Number,
      required: true,
    },
    entry: {
      type: Number,
      required: true,
    },
    fullPrice: {
      type: Number,
      required: true,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    user: {
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

module.exports = model("Booking", schema);
