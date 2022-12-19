const Booking = require("../models/Booking");

const isAvaibleToBooking = async (currentBooking) => {
  const bookingListByRoom = await Booking.find({
    roomId: currentBooking.roomId,
  });
  const currentBookingEntry = new Date(currentBooking.entry).getTime();
  const currentBookingDeparture = new Date(currentBooking.departure).getTime();
  const isBookingOnThisDate = bookingListByRoom.some((booking) => {
    const bookingEntry = new Date(booking.entry).getTime();
    const bookingDeparture = new Date(booking.departure).getTime();
    const isValid =
      (currentBookingEntry >= bookingEntry &&
        currentBookingEntry <= bookingDeparture) ||
      (currentBookingDeparture >= bookingEntry &&
        currentBookingDeparture <= bookingDeparture);
  });
  if (!isBookingOnThisDate) {
    return true;
  }
  return false;
};

module.exports = isAvaibleToBooking;
