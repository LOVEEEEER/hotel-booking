const { Schema, model } = require("mongoose");

const schema = new Schema({
  roomId: {
    type: Schema.Types.ObjectId,
    ref: "Room",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Favorite", schema);
