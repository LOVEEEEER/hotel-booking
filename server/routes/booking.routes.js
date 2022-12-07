const express = require("express");
const auth = require("../models/Booking");
const Booking = require("../models/Booking");
const router = express.Router({
  mergeParams: true,
});

router.get("/", auth, async (req, res) => {
  try {
    const list = await Booking.find();
    res.status(200).send(list);
  } catch {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post(auth, async (req, res) => {
  try {
    const newBooking = await Booking.create({
      ...req.body,
      userId: req.user._id,
    });
    res.status(201).send(newBooking);
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
    if (removedBooking.userId.toString() === req.user._id) {
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
