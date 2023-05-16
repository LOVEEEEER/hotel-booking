const express = require("express");
const Favorite = require("../models/Favorite");
const auth = require("../middleware/auth.middleware");
const isAvaibleToAddFavorite = require("../utils/isAvaibleToAddFavorite");
const router = express.Router({
  mergeParams: true,
});

router.get("/", auth, async (req, res) => {
  try {
    const list = await Favorite.find({ userId: req.user._id });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:roomId", auth, async (req, res) => {
  try {
    const { roomId } = req.params;
    const removedFavoriteItem = await Favorite.findOne({ roomId });
    console.log(
      removedFavoriteItem,
      removedFavoriteItem.userId.toString(),
      req.user._id
    );
    const isAvaibleToRemove =
      removedFavoriteItem.userId.toString() === req.user._id;
    if (isAvaibleToRemove) {
      await removedFavoriteItem.remove();
      res.send(null);
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const isAvaible = await isAvaibleToAddFavorite(
      req.body.roomId,
      req.user._id
    );
    if (isAvaible) {
      const newEntity = await Favorite.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(newEntity);
    } else {
      res.status(403).send({
        error: {
          message: "Данный номер уже есть в списке избранных",
          code: 403,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошли ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
