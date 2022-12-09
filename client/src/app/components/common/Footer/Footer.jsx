import React from "react";
import Divider from "../Divider";
import Logo from "../Logo";

const Footer = () => {
    return (
        <footer className="footer">
            <Divider />
            <div className="footer__container container">
                <div>
                    <p className="footer__description">
                        COSMOS. Copyright. Все права защищены.
                    </p>
                </div>
                <Logo />
            </div>
        </footer>
    );
};

export default Footer;
