import React from "react";
import { useNavigate } from "react-router-dom";
import "./scss/mainpage.scss";
import mainHotelImage from "../../../assets/images/main-hotel.jpg";
import reasonImg from "../../../assets/svg/reasons/lock.svg";

const MainPage = () => {
    const navigate = useNavigate();
    const handleToggleHotelsPage = () => {
        navigate("/rooms");
    };
    return (
        <main className="main__page">
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__main-info">
                        <h1 className="hero__title">
                            Бронирование отелей Лучшие{" "}
                            <span className="hero__title-addition">услуги</span>
                        </h1>
                        <p className="hero__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente, magni omnis velit reiciendis
                            provident reprehenderit animi beatae doloribus!
                            Doloremque labore culpa placeat tempore quo tenetur
                            facere voluptatibus eaque obcaecati nostrum?
                        </p>
                        <button
                            className="hero__ad-button"
                            onClick={handleToggleHotelsPage}
                        >
                            Забронировать
                        </button>
                    </div>
                    <img
                        src={mainHotelImage}
                        alt="main-hotel"
                        className="hero__title-image"
                    />
                </div>
            </section>
            <section className="info">
                <div className="info__container">
                    <div className="info__type">
                        <div className="info__line"></div>
                        <span className="info__type-title">Работа</span>
                    </div>
                    <h2 className="info__title">Как мы работаем</h2>
                    <ul className="info__list">
                        <li className="info__item">
                            <div className="info__image-card">
                                <img
                                    src={reasonImg}
                                    alt="work"
                                    className="info__image"
                                />
                            </div>
                            <h3 className="info__item-title">
                                Легкое бронирование
                            </h3>
                            <p className="info__item-description">
                                Наш сервис позволяет в максимально короткий срок
                                найти номер своей мечты
                            </p>
                        </li>
                        <li className="info__item">
                            <div className="info__image-card">
                                <img
                                    src={reasonImg}
                                    alt="work"
                                    className="info__image"
                                />
                            </div>
                            <h3 className="info__item-title">
                                Легкое бронирование
                            </h3>
                            <p className="info__item-description">
                                Обратившись к нашему сервису, вы за несколько
                                минут сможете забронировать отель своей мечты
                            </p>
                        </li>
                        <li className="info__item">
                            <div className="info__image-card">
                                <img
                                    src={reasonImg}
                                    alt="work"
                                    className="info__image"
                                />
                            </div>
                            <h3 className="info__item-title">
                                Легкое бронирование
                            </h3>
                            <p className="info__item-description">
                                Обратившись к нашему сервису, вы за несколько
                                минут сможете забронировать отель своей мечты
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default MainPage;
