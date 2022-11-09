import React from "react";
import { Skeleton } from "@mui/material";
import arrowDown from "../../../../assets/svg/arrow-down.svg";

const NavProfileLoading = () => {
    return (
        <div className="header__profile">
            <Skeleton variant="circular" width={45} height={45} />
            <img className="header__toggle-arrow" src={arrowDown} alt="" />
        </div>
    );
};

export default NavProfileLoading;
