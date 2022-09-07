import React from "react";
import "./scss/mainpage.scss";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();
  const handleToggleHotelsPage = () => {
    history.push("/rooms");
  };
  return (
    <>
      <main className="main__page">
        <div className="container main__container">
          <h1 className="main__title">Подбери отель своей мечты за 2 клика!</h1>
          <p className="main__description">
            Наш сервис поможет подобрать тебе отличный номер по привлекательной
            цене!
          </p>
          <button className="main__buy-button" onClick={handleToggleHotelsPage}>
            Посмотреть варианты
          </button>
        </div>
      </main>
    </>
  );
};

export default MainPage;
