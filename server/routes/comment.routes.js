const express = require("express");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const Comment = require("../models/Comment");
const router = express.Router({
  mergeParams: true,
});

router.get("/", async (req, res) => {
  try {
    const list = await Comment.find();
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.user._id,
    });
    console.log(newComment);
    res.status(201).send(newComment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:commentId", auth, async (req, res) => {
  try {
    const { commentId } = req.params;
    const removedComment = await Comment.findById(commentId);

    const currentUser = await User.findById(req.user._id);
    const isAvaibleToRemove =
      removedComment.userId.toString() === req.user._id || currentUser.isAdmin;

    if (isAvaibleToRemove) {
      await removedComment.remove();
      return res.send(null);
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

module.exports = router;
