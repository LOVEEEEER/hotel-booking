import React from "react";
import { Button as ButtonMUI, styled } from "@mui/material";

const ButtonContained = styled(ButtonMUI)(() => ({
    color: "#FFFFFF",
    paddingLeft: "14px",
    paddingRight: "14px",
    backgroundColor: "rgb(99, 140, 253)",
    "&:hover": {
        backgroundColor: "rgb(40, 96, 250)"
    }
}));

const ButtonOutlined = styled(ButtonMUI)(() => ({
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

const ButtonCancel = styled(ButtonMUI)(() => ({
    paddingLeft: "14px",
    paddingRight: "14px",
    backgroundColor: "transparent",
    border: "1px solid #f71919",
    color: "#f71919",
    "&:hover": {
        backgroundColor: "#f8d1d1"
    }
}));

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    variant?: "outlined" | "cancel" | "contained";
    disabled?: boolean;
    onClick?: () => void;
    sx?: object;
    className?: string;
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "info"
        | "warning";
};

const Button: React.FC<ButtonProps> = ({
    type,
    variant = "contained",
    children,
    disabled,
    color,
    ...rest
}) => {
    const getButtonType = () => {
        switch (variant) {
            case "outlined":
                return (
                    <ButtonOutlined {...{ type, disabled, color }} {...rest}>
                        {children}
                    </ButtonOutlined>
                );
            case "cancel":
                return (
                    <ButtonCancel {...{ type, disabled, color }} {...rest}>
                        {children}
                    </ButtonCancel>
                );
            default:
                return (
                    <ButtonContained {...{ type, disabled, color }} {...rest}>
                        {children}
                    </ButtonContained>
                );
        }
    };
    return <>{getButtonType()}</>;
};

export default Button;
