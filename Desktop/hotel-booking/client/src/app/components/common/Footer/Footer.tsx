import React from "react";
import { useLocation } from "react-router-dom";
import useDialog from "../../../hooks/useDialog";
import Container from "../Container";
import Divider from "../Divider";
import gitHubIcon from "../../../assets/svg/social-networks/github.svg";
import telegramIcon from "../../../assets/svg/social-networks/telegram.svg";
import Button from "../Button";
import Logo from "../Logo";
import CreateTicketDialog from "../../ui/dialogs/CreateTicketDialog";

const Footer = () => {
    const location = useLocation();
    const { open, handleOpen, handleClose } = useDialog();
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
                    <div className="footer__second-info">
                        <div
                            className="footer__logo-block"
                            style={{
                                display:
                                    location.pathname === "/" ? "block" : "none"
                            }}
                        >
                            <Logo />
                        </div>
                        <div
                            className="footer__feedback"
                            style={{
                                display:
                                    location.pathname === "/" ? "none" : "flex"
                            }}
                        >
                            <p className="footer__feedback-title">
                                Нужна помощь?
                            </p>
                            <Button
                                variant="outlined"
                                sx={{ padding: "5px" }}
                                onClick={handleOpen}
                            >
                                Создать тикет
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <CreateTicketDialog open={open} onClose={handleClose} />
        </footer>
    );
};

export default Footer;
