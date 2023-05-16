import React from "react";
import { Skeleton as SkeletonMUI } from "@mui/material";

type SkeletonProps = {
    width: number;
    height: number;
    sx?: object;
};

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
    return (
        <SkeletonMUI animation="wave" variant="text" {...{ width, height }} />
    );
};

export default Skeleton;
