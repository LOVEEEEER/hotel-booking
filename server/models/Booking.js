const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    departure: {
      type: Date,
    },
    entry: {
      type: Date,
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
    adults: {
      type: Number,
    },
    kids: {
      type: Number,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = model("Booking", schema);
