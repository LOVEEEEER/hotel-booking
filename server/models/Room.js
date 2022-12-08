const { Schema, model } = require("mongoose");

const schema = new Schema({
  breakfast: [String],
  comfort: [String],
  images: [String],
  price: {
    type: String,
  },
  rate: {
    type: String,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
    enum: ["Стандарт", "Комфорт"],
  },
});

module.exports = model("Room", schema);
