import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../common/Button";

const UserProfilePage = () => {
    const { currentUser, logOut } = useAuth();
    const getDateByTimestamp = (timestamp) => {
        return new Date(timestamp).toString();
    };
    return (
        <>
            {currentUser && (
                <main className="user-profile__page">
                    <section className="user-info">
                        <img
                            className="user-info__avatar"
                            src={currentUser.image}
                            alt=""
                        />
                        <div className="user-info__text-block">
                            <h2 className="user-info__name">
                                {currentUser.name}
                            </h2>
                            <p className="user-info__account">
                                Аккаунт создан:{" "}
                                {getDateByTimestamp(currentUser.created_at)}
                            </p>
                            <Button onClick={logOut}>Выйти из аккаунта</Button>
                        </div>
                    </section>
                </main>
            )}
        </>
    );
};

export default UserProfilePage;
