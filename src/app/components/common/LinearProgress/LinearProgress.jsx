import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import LinearProgressMUI, {
    linearProgressClasses
} from "@mui/material/LinearProgress";

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

const LinearProgress = ({ value }) => {
    return <BorderLinearProgress variant="determinate" value={value} />;
};

LinearProgress.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default LinearProgress;
