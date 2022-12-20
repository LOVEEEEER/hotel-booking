const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const Ticket = require("../models/Ticket");
const router = express.Router({
  mergeParams: true,
});

router.get("/", auth, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user._id);
    if (currentUser.isAdmin) {
      const list = await Ticket.find();
      res.status(200).send(list);
    }
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newFeedbackTicket = await Ticket.create({
      ...req.body,
    });
    res.status(201).send(newFeedbackTicket);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.put("/:ticketId", async (req, res) => {
  try {
    const { ticketId } = req.params;
    const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, req.body, {
      new: true,
    });
    res.send(updatedTicket);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
