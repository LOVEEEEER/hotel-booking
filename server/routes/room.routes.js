const express = require("express");
const Room = require("../models/Room");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const router = express.Router({
  mergeParams: true,
});

router.get("/", async (req, res) => {
  try {
    const list = await Room.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.patch("/:roomId", auth, async (req, res) => {
  try {
    const { roomId } = req.params;

    const currentUser = await User.findById(req.user._id);

    if (currentUser.isAdmin) {
      const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, {
        new: true,
      });
      res.send(updatedRoom);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
