import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../common/Button";
import Table from "../../../common/table/Table";
import { getFormatDate } from "../../../../utils/dateService";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentUser,
    deleteUser,
    getUsersList
} from "../../../../store/slices/users";
import { useSort } from "../../../../hooks/useSort";
import { getUserBookingCount } from "../../../../store/slices/booking";

const UsersTable = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsersList());
    const currentUser = useSelector(getCurrentUser());
    const { sortBy, handleSortBy, sortedItems } = useSort(users, "name");
    if (users) {
        const columns = {
            name: {
                name: "Имя",
                path: "name",
                component: (user) => (
                    <Link to={`/users/${user._id}`}>{user.name}</Link>
                )
            },
            email: {
                name: "E-mail",
                path: "email"
            },
            role: {
                name: "Роль",
                path: "isAdmin",
                component: (user) => (
                    <>{user.isAdmin ? "Администратор" : "Посетитель"}</>
                )
            },
            roomsCount: {
                name: "Номеров снято",
                component: (user) => {
                    return `${dispatch(getUserBookingCount(user._id))}`;
                }
            },
            created_at: {
                name: "Аккаунт создан:",
                component: (user) => (
                    <span>{getFormatDate(user.created_at)}</span>
                )
            },
            delete: {
                component: (user) => (
                    <>
                        {user._id !== currentUser._id && (
                            <Button
                                onClick={() => dispatch(deleteUser(user._id))}
                            >
                                Удалить
                            </Button>
                        )}
                    </>
                )
            }
        };

        if (sortedItems) {
            return (
                <Table
                    selectedSort={sortBy}
                    columns={columns}
                    data={sortedItems}
                    onSort={handleSortBy}
                />
            );
        }
    }
};

export default UsersTable;
