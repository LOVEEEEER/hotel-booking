import React, { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import crownIcon from "../../../../assets/svg/crown.svg";
import ProfileList from "../ProfileList";

const NavProfile = () => {
    const [open, setOpen] = useState(false);
    const { currentUser } = useAuth();

    console.log(currentUser);

    const handleOpen = () => {
        setOpen((prevState) => !prevState);
    };
    return (
        <>
            <div className="header__profile">
                <span
                    className={
                        "header__profile-name" +
                        (currentUser.isAdmin ? " header__profile-admin" : "")
                    }
                >
                    {currentUser.name}
                </span>
                {currentUser.isAdmin && (
                    <img className="header__profile-crown" src={crownIcon} />
                )}
                <img
                    className="header__profile-image"
                    src={currentUser.image}
                    alt="user"
                    onClick={handleOpen}
                />
                <ProfileList open={open} />
            </div>
        </>
    );
};

export default NavProfile;
