const express = require("express");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const Booking = require("../models/Booking");
const isAvaibleToBooking = require("../utils/isAvaibleToBooking");
const router = express.Router({
  mergeParams: true,
});

router.get("/", async (req, res) => {
  try {
    const list = await Booking.find();
    res.status(200).send(list);
  } catch {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const isAvaible = await isAvaibleToBooking({ ...req.body });
    if (isAvaible) {
      const newBooking = await Booking.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(newBooking);
    } else {
      res.status(403).send({
        error: {
          message: "На данную дату уже есть бронь",
          code: 403,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:bookingId", auth, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const removedBooking = await Booking.findById(bookingId);
    const currentUser = await User.findById(req.user._id);
    const isAvaibletoRemove =
      removedBooking.userId.toString() === req.user._id || currentUser.isAdmin;

    if (isAvaibletoRemove) {
      await removedBooking.remove();
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
