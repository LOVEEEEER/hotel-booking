import React from "react";
// import { useNavigate } from "react-router-dom";
import "./scss/mainpage.scss";
import mainHotelImage from "../../../assets/images/main-hotel.jpg";

const MainPage = () => {
    // const navigate = useNavigate();
    // const handleToggleHotelsPage = () => {
    //     navigate("/rooms");
    // };
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
                        <button className="hero__ad-button">
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
        </main>
    );
};

export default MainPage;
