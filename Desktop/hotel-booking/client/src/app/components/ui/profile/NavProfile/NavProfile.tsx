import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import arrowDownIcon from "../../../../assets/svg/arrow-down.svg";
import ProfileList from "../ProfileList";
import { getCurrentUser } from "../../../../store/users/usersSelectors";

const NavProfile = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const currentUser = useSelector(getCurrentUser());

    const handleToggleMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="header__profile">
                <div
                    className="header__profile_images"
                    onClick={handleToggleMenu}
                >
                    <img
                        className="header__profile-image header__admin-image"
                        src={currentUser?.image}
                        alt="user"
                    />
                    <img
                        className="header__toggle-arrow"
                        src={arrowDownIcon}
                        alt="arrow"
                    />
                </div>
                <ProfileList
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                />
            </div>
        </>
    );
};

export default NavProfile;
