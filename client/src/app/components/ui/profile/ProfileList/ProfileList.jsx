import React from "react";
import PropTypes from "prop-types";
import ListItemText from "@mui/material/ListItemText";
import Person2Icon from "@mui/icons-material/Person2";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HotelIcon from "@mui/icons-material/Hotel";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logOut } from "../../../../store/slices/users";
import { Menu, MenuItem } from "@mui/material";

const ProfileList = ({ open, anchorEl, ...rest }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser());
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <Menu
            open={open}
            anchorEl={anchorEl}
            sx={{ marginTop: "19px" }}
            {...rest}
        >
            <MenuItem onClick={() => navigate(`/users/${currentUser._id}`)}>
                <Person2Icon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Профиль" />
            </MenuItem>
            {currentUser.isAdmin && (
                <MenuItem onClick={() => navigate("/admin")}>
                    <AdminPanelSettingsIcon sx={{ marginRight: "15px" }} />
                    <ListItemText primary="Панель администратора" />
                </MenuItem>
            )}
            <MenuItem onClick={() => navigate("/booking")}>
                <HotelIcon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Мои бронирования" />
            </MenuItem>
            <MenuItem onClick={() => navigate("/favorites")}>
                <FavoriteIcon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Избранное" />
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
                <LogoutIcon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Выход" />
            </MenuItem>
        </Menu>
    );
};

ProfileList.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    anchorEl: PropTypes.object
};

export default ProfileList;
