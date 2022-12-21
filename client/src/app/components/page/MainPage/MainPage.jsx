import React from "react";
import { useNavigate } from "react-router-dom";
import "./scss/mainpage.scss";
import mainHotelImage from "../../../assets/images/main-hotel.jpg";
import rocketIcon from "../../../assets/svg/rocket.svg";
import handShakeIcon from "../../../assets/svg/handshake.svg";
import bookingIcon from "../../../assets/svg/booking.svg";
import CreateTicketForm from "../../ui/forms/CreateTicketForm";

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
                    <div className="section__type">
                        <div className="section__line"></div>
                        <span className="section__type-title">Работа</span>
                    </div>
                    <h2 className="section__title">Как мы работаем</h2>
                    <ul className="info__list">
                        <li className="info__item">
                            <div className="info__image-card">
                                <img
                                    src={rocketIcon}
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
                                    src={bookingIcon}
                                    alt="work"
                                    className="info__image"
                                />
                            </div>
                            <h3 className="info__item-title">Онлайн сервис</h3>
                            <p className="info__item-description">
                                Вы можете забронировать свой номер находясь в
                                любой точке мира
                            </p>
                        </li>
                        <li className="info__item">
                            <div className="info__image-card">
                                <img
                                    src={handShakeIcon}
                                    alt="work"
                                    className="info__image"
                                />
                            </div>
                            <h3 className="info__item-title">
                                Сотрудничество с отелями
                            </h3>
                            <p className="info__item-description">
                                Мы имеем большую базу отелей, с привлекательными
                                ценами
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="feedback">
                <div className="container feedback__container">
                    <div className="section__type">
                        <div className="section__line"></div>
                        <span className="section__type-title">
                            Обратная связь
                        </span>
                    </div>
                    <h2 className="section__title">Оставьте вопрос</h2>
                    <div className="feedback__form-block">
                        <CreateTicketForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainPage;
