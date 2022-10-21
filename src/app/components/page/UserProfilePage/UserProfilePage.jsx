import React, { useState, useEffect } from "react";
import userService from "../../../services/user.service";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../common/Button";
import { getDateByTimestamp } from "../../../utils/dateService";
import { useParams } from "react-router-dom";

const UserProfilePage = () => {
    const [user, setUser] = useState();
    const { logOut } = useAuth();
    const { userId } = useParams();
    useEffect(() => {
        getUserById(userId);
    }, []);
    async function getUserById(userId) {
        const { content } = await userService.getById(userId);
        setUser(content);
    }
    return (
        <>
            {user && (
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
                            <p className="user-profile__user-description">
                                Дата регистрации:{" "}
                                {getDateByTimestamp(user.created_at)}
                            </p>
                            <p className="user-profile__user-statistics">
                                Номеров снято: 0
                            </p>
                            <p className="user-profile__user-statisticsn">
                                Оценок поставлено: 0
                            </p>
                            <Button sx={{ marginTop: "20px" }} onClick={logOut}>
                                Выйти
                            </Button>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default UserProfilePage;
