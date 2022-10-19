import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../common/Button";
import { getDateByTimestamp } from "../../../utils/dateService";

const UserProfilePage = () => {
    const { currentUser, logOut } = useAuth();
    return (
        <>
            {currentUser && (
                <main className="user-profile__page">
                    <div className="user-profile">
                        <img
                            className="user-profile__user-image"
                            src={currentUser.image}
                            alt="user-image"
                        />
                        <div className="user-profile__info-block">
                            <h2 className="user-profile__user-name">
                                {currentUser.name}
                            </h2>
                            <p className="user-profile__user-description">
                                Дата регистрации:{" "}
                                {getDateByTimestamp(currentUser.created_at)}
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
