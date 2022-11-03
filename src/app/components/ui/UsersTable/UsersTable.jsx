import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Table from "../../common/table/Table";
import { getFormatDate } from "../../../utils/dateService";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, deleteUser, getUsersList } from "../../../store/users";

const UsersTable = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsersList());
    const currentUser = useSelector(getCurrentUser());
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
            component: (user) => (
                <span>{getFormatDate(new Date(user.created_at))}</span>
            )
        },
        delete: {
            component: (user) => (
                <>
                    {user.id !== currentUser.id && (
                        <Button onClick={() => dispatch(deleteUser(user.id))}>
                            Удалить
                        </Button>
                    )}
                </>
            )
        }
    };
    return <Table columns={columns} data={users} />;
};

export default UsersTable;
