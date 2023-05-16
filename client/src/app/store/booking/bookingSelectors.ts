import { Booking, User } from "../../types/types";
import { RootState } from "../createStore";

export const getBookingList = () => (state: RootState) => {
    return state.booking.entities;
};

export const getBookingById =
    (bookingId: Booking["_id"]) => (state: RootState) => {
        return state.booking.entities.find(
            (booking) => booking._id === bookingId
        );
    };

export const getBookingByUserId =
    (userId: Booking["userId"]) => (state: RootState) => {
        return state.booking.entities.find(
            (booking) => booking.userId === userId
        );
    };

export const getUserBookingList =
    (userId: User["_id"]) => (state: RootState) => {
        return state.booking.entities.filter((booking) => {
            return (
                booking.userId.toString() === userId &&
                new Date(booking.entry).getTime() > new Date().getTime()
            );
        });
    };

export const getUserBookingCount =
    (userId: Booking["userId"]) => (state: RootState) => {
        return state.booking.entities.filter(
            (booking) => booking.userId.toString() === userId
        )?.length;
    };

export const getBookingLoadingStatus = () => (state: RootState) =>
    state.booking.isLoading;

export const getBookingError = () => (state: RootState) => state.booking.error;
