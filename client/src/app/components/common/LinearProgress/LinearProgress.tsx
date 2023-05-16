import React from "react";
import {
    LinearProgress as LinearProgressMUI,
    linearProgressClasses,
    styled
} from "@mui/material";

const BorderLinearProgress = styled(LinearProgressMUI)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
    }
}));

type LinearProgressProps = {
    value: number;
};

const LinearProgress: React.FC<LinearProgressProps> = ({ value }) => {
    return <BorderLinearProgress variant="determinate" {...{ value }} />;
};

export default LinearProgress;
