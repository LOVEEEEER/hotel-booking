import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import Logo from "../Logo";
import gitHubIcon from "../../../assets/svg/social-networks/github.svg";
import telegramIcon from "../../../assets/svg/social-networks/telegram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Divider />
            <Container>
                <div className="footer__container">
                    <div>
                        <p className="footer__description">
                            COSMOS. Copyright. Все права защищены.
                        </p>
                        <ul className="footer__social-list">
                            <li className="footer__social-item">
                                <a
                                    href="https://github.com/LOVEEEEER"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="footer__social"
                                        src={gitHubIcon}
                                        alt="github"
                                    />
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a
                                    href="https://t.me/hatesLov"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="footer__social"
                                        src={telegramIcon}
                                        alt="telegram"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Logo />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
