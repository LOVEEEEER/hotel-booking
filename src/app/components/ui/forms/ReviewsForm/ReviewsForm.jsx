import React, { useState } from "react";
import Button from "../../../common/Button";
import TextAreaField from "../../../common/form/TextAreaField";

const ReviewsForm = () => {
    const [data, setData] = useState({ review: "" });
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    return (
        <form>
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
