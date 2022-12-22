const { Schema, model } = require("mongoose");

const schema = new Schema({
  breakfast: [String],
  hasSmokeZone: {
    type: Boolean,
  },
  hasSwimmingPool: {
    type: Boolean,
  },
  hasBank: {
    type: Boolean,
  },
  hasWifi: {
    type: Boolean,
  },
  hasGym: {
    type: Boolean,
  },
  hasParking: {
    type: Boolean,
  },
  hasConditioner: {
    type: Boolean,
  },
  images: [String],
  price: {
    type: Number,
  },
  rate: {
    type: Number,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
});

module.exports = model("Room", schema);
