import React from "react";
import { Skeleton as SkeletonMUI } from "@mui/material";

const Skeleton = ({ ...rest }) => {
    return <SkeletonMUI animation="wave" {...rest} />;
};

export default Skeleton;
