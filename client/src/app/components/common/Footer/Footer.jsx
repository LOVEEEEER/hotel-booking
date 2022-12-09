import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import Logo from "../Logo";

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
                    </div>
                    <Logo />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
