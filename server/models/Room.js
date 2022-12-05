const { Schema, model } = require("mongoose");

const schema = new Schema({
  breakfast: [String],
  comfort: [String],
  images: [String],
  price: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Стандарт", "Комфорт"],
  },
});

module.exports = model("Room", schema);
