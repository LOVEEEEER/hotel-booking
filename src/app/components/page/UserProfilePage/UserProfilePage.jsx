import React from "react";
import Button from "../../common/Button";
import { getFormatDate } from "../../../utils/dateService";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";

const UserProfilePage = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const user = useSelector(getUserById(userId));

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
                        <h2 className="user-profile__user-name">{user.name}</h2>
                        <ul className="user-profile__list">
                            <li className="user-profile__item">
                                <span className="user-profile__description">
                                    Дата регистрации:{" "}
                                    {getFormatDate(new Date(user.created_at))}
                                </span>
                            </li>
                            <li className="user-profile__item">
                                <span className="user-profile__description">
                                    День рождения:{" "}
                                    {getFormatDate(new Date(user.birth))}
                                </span>
                            </li>
                            <li className="user-profile__item">
                                <span className="user-profile__description">
                                    Номеров снято: 0
                                </span>
                            </li>
                            <li className="user-profile__item">
                                <span className="user-profile__description">
                                    Оценок поставлено: 0
                                </span>
                            </li>
                        </ul>
                        <Button
                            variant="outlined"
                            sx={{ marginTop: "20px", marginRight: "10px" }}
                            onClick={() => navigate("/edit")}
                        >
                            Редактировать профиль
                        </Button>

                        <Button sx={{ marginTop: "20px" }}>Выйти</Button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default UserProfilePage;
