const { Schema, model } = require("mongoose");

const schema = new Schema({
  roomId: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
});

module.exports = model("Favorite", schema);
