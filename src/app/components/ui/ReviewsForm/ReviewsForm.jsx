import React, { useState } from "react";
import Button from "../../common/Button";
import TextField from "../../common/TextField";

const ReviewsForm = () => {
  const [data, setData] = useState({ review: "" });
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  return (
    <form>
      <TextField
        value={data.review}
        name="review"
        label="Отзыв"
        placeholder="Ваши мысли..."
        onChange={handleChange}
        sx={{ width: "600px", marginBottom: "15px" }}
      />
      <br />
      <Button sx={{ width: "100%" }}>Оставить отзыв</Button>
    </form>
  );
};

export default ReviewsForm;
