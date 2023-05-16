import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/createStore";
import { Menu, MenuItem, ListItemText } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import HotelIcon from "@mui/icons-material/Hotel";
import { User } from "../../../../types/types";
import { getCurrentUser } from "../../../../store/users/usersSelectors";
import { logOut } from "../../../../store/users/usersActions";

type ProfileListProps = {
    open: boolean;
    anchorEl: HTMLElement | null;
    onClose: (event: Event | React.SyntheticEvent) => void;
};

const ProfileList: React.FC<ProfileListProps> = (props) => {
    const { open, anchorEl, onClose } = props;
    const dispatch = useAppDispatch();
    const currentUser = useSelector(getCurrentUser());
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    if (currentUser) {
        return (
            <Menu {...{ anchorEl, open, onClose }} sx={{ marginTop: "19px" }}>
                <MenuItem onClick={() => navigate(`/users/${currentUser._id}`)}>
                    <Person2Icon sx={{ marginRight: "15px" }} />
                    <ListItemText primary="Профиль" />
                </MenuItem>
                {currentUser && currentUser.isAdmin && (
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
    }
    return <h1></h1>;
};

export default ProfileList;
