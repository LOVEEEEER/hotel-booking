import React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HotelIcon from "@mui/icons-material/Hotel";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logOut } from "../../../../store/users";

const ProfileList = ({ open }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser());
    const history = useHistory();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    const listStyleConfig = {
        position: "absolute",
        top: "8%",
        width: "100%",
        maxWidth: 250,
        backgroundColor: "#FFFFFF",
        opacity: "1",
        borderRadius: "5px",
        boxShadow: "4px 4px 8px 2px rgba(34, 60, 80, 0.2)",
        zIndex: "100",
        display: !open ? "none" : "block"
    };
    return (
        <List sx={listStyleConfig}>
            <ListItemButton
                onClick={() => history.push(`/users/${currentUser.id}`)}
            >
                <Person2Icon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Профиль" />
            </ListItemButton>
            {currentUser.isAdmin && (
                <ListItemButton onClick={() => history.push("/admin")}>
                    <AdminPanelSettingsIcon sx={{ marginRight: "15px" }} />
                    <ListItemText primary="Панель администратора" />
                </ListItemButton>
            )}
            <ListItemButton>
                <HotelIcon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Мои бронирования" />
            </ListItemButton>
            <ListItemButton onClick={handleLogOut}>
                <LogoutIcon sx={{ marginRight: "15px" }} />
                <ListItemText primary="Выход" />
            </ListItemButton>
        </List>
    );
};

ProfileList.propTypes = {
    open: PropTypes.bool.isRequired
};

export default ProfileList;
