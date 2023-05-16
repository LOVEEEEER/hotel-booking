import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useDialog from "../../../hooks/useDialog";
import { getFormatDate } from "../../../utils/dateService";
import Button from "../../common/Button";
import Dialog from "../../common/Dialog";
import EditUserForm from "../../ui/forms/EditUserForm";
import FormCardStyles from "../../ui/hoc/FormCardStyles";
import {
    getCurrentUser,
    getUserById,
    getUsersLoadingStatus
} from "../../../store/users/usersSelectors";
import { getUserBookingCount } from "../../../store/booking/bookingSelectors";

const UserProfilePage: React.FC = () => {
    const { open, handleOpen, handleClose } = useDialog();
    const { userId } = useParams();
    const currentUser = useSelector(getCurrentUser());
    const user = useSelector(getUserById(userId || ""));
    const usersLoading = useSelector(getUsersLoadingStatus());
    const userBookingCount = useSelector(getUserBookingCount(userId || ""));
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
                            {currentUser?._id === user._id && (
                                <>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            marginTop: "20px",
                                            marginRight: "10px"
                                        }}
                                        onClick={handleOpen}
                                    >
                                        Редактировать профиль
                                    </Button>

                                    <Dialog open={open} onClose={handleClose}>
                                        <FormCardStyles>
                                            <h1 className="form-title">
                                                Редактирование профиля
                                            </h1>
                                            <EditUserForm />
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
    return <></>;
};

export default UserProfilePage;
