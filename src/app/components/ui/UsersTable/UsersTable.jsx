import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Table from "../../common/table/Table";

const UsersTable = ({ ...rest }) => {
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
            path: "created_at"
        },
        delete: {
            component: () => <Button>Удалить</Button>
        }
    };
    return <Table columns={columns} {...rest} />;
};

export default UsersTable;
