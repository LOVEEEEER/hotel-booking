import React from "react";
import Button from "../../common/Button";
import { getFormatDate } from "../../../utils/dateService";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    getCurrentUser,
    getIsLoading,
    getUserBookingCount,
    getUserById
} from "../../../store/slices/users";
import { useDialog } from "../../../hooks/useDialog";
import Dialog from "../../common/Dialog";
import EditForm from "../../ui/forms/EditForm";
import FormCardStyles from "../../ui/HOC/FormCardStyles";
import "./scss/user-page.scss";

const UserPage = () => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const { userId } = useParams();
    const currentUser = useSelector(getCurrentUser());
    const user = useSelector(getUserById(userId));
    const usersLoading = useSelector(getIsLoading());
    const userBookingCount = useSelector(getUserBookingCount(userId));
    if (!usersLoading && user) {
        return (
            <>
                <main className="user-profile__page">
                    <div className="user-profile">
                        <img
                            className="user-profile__user-image"
                            src={user.image}
                            alt="user-image"
                        />
                        <div className="user-profile__info-block">
                            <h2 className="user-profile__user-name">
                                {user.name}
                            </h2>
                            <ul className="user-profile__list">
                                <li className="user-profile__item">
                                    <span className="user-profile__description">
                                        Дата регистрации:{" "}
                                        {getFormatDate(user.created_at)}
                                    </span>
                                </li>
                                <li className="user-profile__item">
                                    <span className="user-profile__description">
                                        День рождения:{" "}
                                        {getFormatDate(user.birth)}
                                    </span>
                                </li>
                                <li className="user-profile__item">
                                    <span className="user-profile__description">
                                        Бронирований: {userBookingCount}
                                    </span>
                                </li>
                            </ul>
                            {currentUser._id === user._id && (
                                <>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            marginTop: "20px",
                                            marginRight: "10px"
                                        }}
                                        onClick={handleClickOpen}
                                    >
                                        Редактировать профиль
                                    </Button>

                                    <Dialog open={open} onClose={handleClose}>
                                        <FormCardStyles>
                                            <h1 className="form-title">
                                                Редактирование профиля
                                            </h1>
                                            <EditForm />
                                        </FormCardStyles>
                                    </Dialog>

                                    <Button sx={{ marginTop: "20px" }}>
                                        Выйти
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </main>
            </>
        );
    }
};

export default UserPage;
