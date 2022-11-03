import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonMui, styled } from "@mui/material";

const ButtonContained = styled(ButtonMui)(() => ({
    color: "#FFFFFF",
    paddingLeft: "14px",
    paddingRight: "14px",
    backgroundColor: "rgb(99, 140, 253)",
    "&:hover": {
        backgroundColor: "rgb(40, 96, 250)"
    }
}));

const ButtonOutlined = styled(ButtonMui)(() => ({
    paddingLeft: "14px",
    paddingRight: "14px",
    backgroundColor: "transparent",
    border: "1px solid rgb(99, 140, 253)",
    color: "rgb(99, 140, 253)",
    transition: "0.5s",
    "&:hover": {
        backgroundColor: "rgb(236, 240, 252)",
        border: "1px solid rgb(40, 96, 250)"
    }
}));

const Button = ({ type, label, variant, children, ...rest }) => {
    return (
        <>
            {variant === "outlined" ? (
                <ButtonOutlined type={type} label={label} {...rest}>
                    {children}
                </ButtonOutlined>
            ) : (
                <ButtonContained type={type} label={label} {...rest}>
                    {children}
                </ButtonContained>
            )}
        </>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Button.defaultProps = {
    label: "text",
    type: "submit"
};

export default Button;
