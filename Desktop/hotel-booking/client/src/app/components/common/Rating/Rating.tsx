import React from "react";
import { Rating as RatingMUI, styled, Typography } from "@mui/material";
import { FakeEventType } from "../../../types/types";

const RatingStyled = styled(RatingMUI)(() => ({
    color: "rgb(247, 164, 255)"
}));

type RatingProps = {
    value: number;
    label?: string;
    readOnly?: boolean;
    sx?: object;
    name?: string;
    onChange?: (e: FakeEventType) => void;
    size?: "small" | "medium" | "large";
};

const Rating: React.FC<RatingProps> = ({
    name,
    value,
    label,
    onChange,
    ...rest
}) => {
    const handleChange = (value: number | null) => {
        const fakeEvent = {
            target: {
                name: name!,
                value: JSON.stringify(value)!
            }
        };
        if (onChange) {
            onChange(fakeEvent);
        }
    };
    return (
        <>
            <Typography component="legend">{label}</Typography>
            <RatingStyled
                value={Number(value)}
                onChange={(e, newValue) => handleChange(newValue)}
                {...rest}
            />
        </>
    );
};

export default Rating;
