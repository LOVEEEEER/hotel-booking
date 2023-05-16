import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import { useAppDispatch } from "../../../../store/createStore";
import Button from "../../../common/Button";
import TextAreaField from "../../../common/fields/TextAreaField";
import Rating from "../../../common/Rating";
import { validatorConfig } from "./validatorConfig";
import {
    getCurrentUserId,
    getUserById
} from "../../../../store/users/usersSelectors";
import { createComment } from "../../../../store/comments/commentsActions";
import { KeyboardReturnTwoTone } from "@mui/icons-material";

const createCommentFormInitialState = {
    comment: "" as string,
    rate: 0 as number
};

type CreateCommentFormProps = {
    answerOn?: string;
};

const CreateCommentForm: React.FC<CreateCommentFormProps> = ({ answerOn }) => {
    const dispatch = useAppDispatch();
    const { data, handleChange, errors, validateBySubmit } = useForm(
        createCommentFormInitialState,
        validatorConfig
    );
    const { roomId } = useParams();
    const answeredUser = useSelector(getUserById(answerOn || ""))!;
    const currentUserId = useSelector(getCurrentUserId())!;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        console.log(isValid);
        if (!isValid) return;
        if (!answeredUser?._id) {
            dispatch(
                createComment({
                    ...data,
                    text: data.comment,
                    userId: currentUserId,
                    pageId: roomId!
                })
            );
        }
        dispatch(
            createComment({
                ...data,
                text: data.comment,
                userId: currentUserId,
                pageId: roomId!,
                answerOn: answeredUser?._id
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
                error={errors.comment}
            />
            <br />
            <div className="room-comments__publish">
                <Rating
                    name="rate"
                    value={Number(data.rate)}
                    onChange={handleChange}
                    sx={{ marginBottom: "20px" }}
                    size="large"
                />{" "}
                <Button type="submit">Опубликовать</Button>
            </div>
        </form>
    );
};

export default CreateCommentForm;
