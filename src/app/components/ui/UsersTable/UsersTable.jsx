import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Table from "../../common/table/Table";
import { useAuth } from "../../../hooks/useAuth";
import { getFormatDate } from "../../../utils/dateService";

const UsersTable = ({ onDelete, users, ...rest }) => {
    const { currentUser } = useAuth();
    const columns = {
        name: {
            name: "Имя",
            path: "name",
            component: (user) => (
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            )
        },
        email: {
            name: "E-mail",
            path: "email"
        },
        role: {
            name: "Роль",
            component: (user) => (
                <>{user.isAdmin ? "Администратор" : "Посетитель"}</>
            )
        },
        roomsCount: {
            name: "Номер снято",
            component: () => {
                return `${Math.floor(Math.random() * 20)}`;
            }
        },
        created_at: {
            name: "Аккаунт создан:",
            component: (user) => <span>{getFormatDate(new Date(user.created_at))}</span>
        },
        delete: {
            component: (user) => (
                <>
                    {!(user.id === currentUser.id) && (
                        <Button onClick={() => onDelete(user.id)}>
                            Удалить
                        </Button>
                    )}
                </>
            )
        }
    };
    return <Table columns={columns} {...rest} />;
};

UsersTable.propTypes = {
    onDelete: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UsersTable;
