import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavProfile from "../profile/NavProfile";
import { useSelector } from "react-redux";
import Button from "../../common/Button";
import { LinkType } from "../../common/Header/Header";
import { getIsLoggedIn } from "../../../store/users/usersSelectors";

type PhoneMenuProps = {
    open: boolean;
    navLinks: LinkType[];
    onToggleMenu: () => void;
};

const PhoneMenu: React.FC<PhoneMenuProps> = ({
    open,
    navLinks,
    onToggleMenu
}) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const navigate = useNavigate();
    return (
        <div className={"header__menu" + (open ? " active" : "")}>
            {isLoggedIn ? (
                <NavProfile />
            ) : (
                <Button
                    variant="outlined"
                    sx={{ width: "100px", marginTop: "3px" }}
                    onClick={() => navigate("/login/signin")}
                >
                    Вход
                </Button>
            )}
            <ul className="header__menu-list">
                {navLinks.map((link) => (
                    <li key={link._id} className="header__menu-item">
                        <NavLink
                            className={({ isActive }) =>
                                `header__nav-link ${isActive ? "active" : ""}`
                            }
                            to={link.path}
                            onClick={onToggleMenu}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhoneMenu;
