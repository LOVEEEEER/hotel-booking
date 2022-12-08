const express = require("express");
const router = express.Router({
  mergeParams: true,
});

router.use("/room", require("./room.routes"));
router.use("/auth", require("./auth.routes"));
// router.use("/room", require("./room.routes"));
// router.use("/comment", require("./comment.routes"));
// router.use("/user", require("./user.routes"));
// router.use("/favorite", require("./favorite.routes"));
// router.use("/booking", require("./booking.routes"));

module.exports = router;
