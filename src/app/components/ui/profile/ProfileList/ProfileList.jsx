import React from "react";
import PropTypes from "prop-types";
import ListItemText from "@mui/material/ListItemText";
import Person2Icon from "@mui/icons-material/Person2";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HotelIcon from "@mui/icons-material/Hotel";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logOut } from "../../../../store/users";
import { Menu, MenuItem, styled } from "@mui/material";

const ProfileList = ({ open }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser());
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    const MenuStyled = styled(Menu)(() => ({
        position: "fixed",
        top: "6%",
        right: "200%"
    }));

    return (
        <MenuStyled
            sx={{ position: "absolute", top: "6%", right: "15%" }}
            open={open}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
        >
            <MenuItem onClick={() => navigate(`/users/${currentUser.id}`)}>
                <Person2Icon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Профиль" />
            </MenuItem>
            {currentUser.isAdmin && (
                <MenuItem onClick={() => navigate("/admin")}>
                    <AdminPanelSettingsIcon sx={{ marginRight: "15px" }} />
                    <ListItemText primary="Панель администратора" />
                </MenuItem>
            )}
            <MenuItem>
                <HotelIcon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Мои бронирования" />
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
                <LogoutIcon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Выход" />
            </MenuItem>
        </MenuStyled>
    );
};

ProfileList.propTypes = {
    open: PropTypes.bool.isRequired
};

export default ProfileList;
