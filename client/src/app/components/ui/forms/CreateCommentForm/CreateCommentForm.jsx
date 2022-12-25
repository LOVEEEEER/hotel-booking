import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../../common/Button";
import TextAreaField from "../../../common/form/TextAreaField";
import Rating from "../../../common/Rating";
import { useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { validatorConfig } from "./validatorConfig";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../../../store/slices/comments";
import { getUserById } from "../../../../store/slices/users";
import "./scss/create-comment-form.scss";

const CreateCommentForm = ({ answerOn }) => {
    const dispatch = useDispatch();
    const { data, handleChange, errors, validateBySubmit } = useForm(
        { comment: "", rate: "0" },
        validatorConfig
    );
    const { roomId } = useParams();
    const answeredUser = useSelector(getUserById(answerOn));

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        dispatch(
            createComment({
                ...data,
                text: data.comment,
                pageId: roomId,
                answerOn: answeredUser
            })
        );
    };

    useEffect(() => {
        if (answerOn) {
            const fakeEvent = {
                target: {
                    name: "comment",
                    value: `${answeredUser?.name}, `
                }
            };
            handleChange(fakeEvent);
        }
    }, [answerOn]);

    return (
        <form onSubmit={handleSubmit}>
            <TextAreaField
                value={data.comment}
                name="comment"
                label="Отзыв"
                placeholder="Ваши мысли..."
                onChange={handleChange}
                rows={4}
                sx={{ width: "600px", marginBottom: "15px" }}
                errorMessage={errors.comment}
            />
            <br />
            <div className="room-comments__publish">
                <Rating
                    name="rate"
                    value={data.rate}
                    onChange={handleChange}
                    sx={{ marginBottom: "20px" }}
                    size="large"
                />
                {/* <br /> */}
                <Button>Опубликовать</Button>
            </div>
        </form>
    );
};

CreateCommentForm.propTypes = {
    answerOn: PropTypes.string
};

export default CreateCommentForm;
