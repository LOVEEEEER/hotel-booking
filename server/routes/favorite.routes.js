const express = require("express");
const Favorite = require("../models/Favorite");
const auth = require("../middleware/auth.middleware");
const router = express.Router({
  mergeParams: true,
});

router.get("/", auth, async (req, res) => {
  try {
    const list = await Favorite.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/",auth, async (req, res) => {
  try {
    const newEntity = await Favorite.create({
      ...req.body,
      userId: req.user._id,
    });
    res.status(201).send(newEntity);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошли ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
