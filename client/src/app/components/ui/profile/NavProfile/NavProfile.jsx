import React, { useState } from "react";
import ProfileList from "../ProfileList";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../../store/slices/users";
import arrowDown from "../../../../assets/svg/arrow-down.svg";
import "./scss/nav-profile.scss";

const NavProfile = () => {
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const currentUser = useSelector(getCurrentUser());

    const handleClick = ({ currentTarget }) => {
        setAnchor(currentTarget);
    };
    const handleClose = () => {
        setAnchor(null);
    };
    if (currentUser) {
        return (
            <>
                <div className="header__profile">
                    <div
                        className="header__profile_images"
                        onClick={handleClick}
                    >
                        <img
                            className="header__profile-image header__admin-image"
                            src={currentUser.image}
                            alt="user"
                        />
                        <img
                            className="header__toggle-arrow"
                            src={arrowDown}
                            alt="arrow"
                        />
                    </div>
                    <ProfileList
                        anchorEl={anchor}
                        open={open}
                        onClose={handleClose}
                    />
                </div>
            </>
        );
    }
};

export default NavProfile;
