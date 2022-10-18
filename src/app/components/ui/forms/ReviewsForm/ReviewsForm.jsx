import React, { useState } from "react";
import Button from "../../../common/Button";
import TextAreaField from "../../../common/form/TextAreaField";
import { useAuth } from "../../../../hooks/useAuth";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { useComments } from "../../../../hooks/useComments";

const ReviewsForm = () => {
    const [data, setData] = useState({ review: "" });
    const { roomId } = useParams();
    const { currentUser } = useAuth();
    const { createComment } = useComments();
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = {
            userId: currentUser.id,
            id: nanoid(),
            text: data.review,
            created_at: Date.now(),
            pageId: roomId,
            rate: Math.round(Math.random() * 5)
        };
        createComment(comment);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextAreaField
                value={data.review}
                name="review"
                label="Отзыв"
                placeholder="Ваши мысли..."
                onChange={handleChange}
                rows={4}
                sx={{ width: "600px", marginBottom: "15px" }}
            />
            <br />
            <Button>Опубликовать</Button>
        </form>
    );
};

export default ReviewsForm;
