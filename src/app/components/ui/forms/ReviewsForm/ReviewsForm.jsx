import React from "react";
import Button from "../../../common/Button";
import TextAreaField from "../../../common/form/TextAreaField";
import Rating from "../../../common/Rating";
import { useAuth } from "../../../../hooks/useAuth";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { useComments } from "../../../../hooks/useComments";
import { useForm } from "../../../../hooks/useForm";
import { validatorConfig } from "./validatorConfig";

const ReviewsForm = () => {
    const { data, handleChange, errors, validateBySubmit } = useForm(
        { review: "", rate: "5" },
        validatorConfig
    );
    const { roomId } = useParams();
    const { currentUser } = useAuth();
    const { createComment } = useComments();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        const comment = {
            userId: currentUser.id,
            id: nanoid(),
            rate: data.rate,
            text: data.review,
            created_at: Date.now(),
            pageId: roomId
        };
        createComment(comment);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextAreaField
                error={Boolean(errors.review)}
                value={data.review}
                name="review"
                label="Отзыв"
                placeholder="Ваши мысли..."
                onChange={handleChange}
                rows={4}
                sx={{ width: "600px", marginBottom: "15px" }}
                helperText={errors.review ? errors.review : null}
            />
            <br />
            <Rating
                name="rate"
                value={data.rate}
                onChange={handleChange}
                sx={{ marginBottom: "20px" }}
                size="large"
            />
            <br />
            <Button>Опубликовать</Button>
        </form>
    );
};

export default ReviewsForm;
