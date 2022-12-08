const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    departure: {
      type: Number,
    },
    entry: {
      type: Number,
    },
    fullPrice: {
      type: Number,
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
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

module.exports = model("Booking", schema);
