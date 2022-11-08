import React from "react";
// import Button from "../../common/Button";
import { getFormatDate } from "../../../utils/dateService";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";

const UserProfilePage = () => {
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
                        <p className="user-profile__user-description">
                            Дата регистрации:{" "}
                            {getFormatDate(new Date(user.created_at))}
                        </p>
                        <p className="user-profile__user-statistics">
                            День рождения: {getFormatDate(new Date(user.birth))}
                        </p>
                        <p className="user-profile__user-statistics">
                            Номеров снято: 0
                        </p>
                        <p className="user-profile__user-statistics">
                            Оценок поставлено: 0
                        </p>
                        {/* {userId === currentUser.id && (
                            <Button sx={{ marginTop: "20px" }} onClick={logOut}>
                                Выйти
                            </Button>
                        )} */}
                    </div>
                </div>
            </main>
        </>
    );
};

export default UserProfilePage;
