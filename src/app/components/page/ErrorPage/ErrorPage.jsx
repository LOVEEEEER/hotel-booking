import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const ErrorPage = () => {
  const history = useHistory();
  const handleTogglePage = () => {
    history.replace("/rooms");
  };
  return (
    <main className="error">
      <div className="container error__container">
        <div className="error__text-wrapper">
          <h1 className="error__title" data-tilt-scale="1.1">
            page not found
          </h1>
          <ul className="error__errors-list">
            <li className="error__errors-item">
              We looked everywhere for this page
            </li>
            <li className="error__errors-item">
              Are you sure the website URL is correct?
            </li>
            <li className="error__errors-item">
              Get in touch with the site owner
            </li>
          </ul>
          <Button variant="outlined" onClick={handleTogglePage}>
            Вернуться к выбору отеля
          </Button>
        </div>
        <img
          src="https://pngimg.com/uploads/air_balloon/air_balloon_PNG19402.png"
          className="error__error-image"
          alt="error"
        />
      </div>
    </main>
  );
};

export default ErrorPage;
