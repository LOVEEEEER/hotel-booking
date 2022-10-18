import React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router-dom";

const ProfileList = ({ open }) => {
    const history = useHistory();
    const listStyleConfig = {
        position: "absolute",
        top: "8%",
        width: "100%",
        maxWidth: 250,
        backgroundColor: "#FFFFFF",
        opacity: "1",
        borderRadius: "9px",
        boxShadow: "4px 4px 8px 2px rgba(34, 60, 80, 0.2)",
        zIndex: "100",
        display: !open ? "none" : "block"
    };
    return (
        <List sx={listStyleConfig}>
            <ListItemButton onClick={() => history.push("/profile")}>
                <ListItemText primary="Профиль" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Панель администратора" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Мои бронирования" />
            </ListItemButton>
        </List>
    );
};

ProfileList.propTypes = {
    open: PropTypes.bool.isRequired
};

export default ProfileList;
