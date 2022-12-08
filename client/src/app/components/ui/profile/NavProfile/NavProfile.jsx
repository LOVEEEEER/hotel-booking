import React, { useState } from "react";
import ProfileList from "../ProfileList";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../../store/users";
import arrowDown from "../../../../assets/svg/arrow-down.svg";

const NavProfile = () => {
    const [open, setOpen] = useState(false);
    const currentUser = useSelector(getCurrentUser());

    const handleOpen = () => {
        setOpen((prevState) => !prevState);
    };
    console.log(currentUser);
    if (currentUser) {
        return (
            <>
                <div className="header__profile" onClick={handleOpen}>
                    <img
                        className="header__profile-image header__admin-image"
                        src={currentUser.image}
                        alt="user"
                    />
                    <img
                        className="header__toggle-arrow"
                        src={arrowDown}
                        alt=""
                    />
                    <ProfileList open={open} />
                </div>
            </>
        );
    }
};

export default NavProfile;
