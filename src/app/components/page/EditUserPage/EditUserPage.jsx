import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../store/users";
import EditForm from "../../ui/forms/EditForm";
import FormCardStyles from "../../ui/HOC/FormCardStyles";

const EditUserPage = () => {
    const currentUser = useSelector(getCurrentUser());
    if (currentUser) {
        return (
            <main className="edit__page">
                <div className="container edit__container">
                    <FormCardStyles>
                        <h1 className="form-title">Редактирование профиля</h1>
                        <EditForm currentUser={currentUser} />
                    </FormCardStyles>
                </div>
            </main>
        );
    }
    return "loading...";
};

export default EditUserPage;
