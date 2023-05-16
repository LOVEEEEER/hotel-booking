import React from "react";
import { Avatar as AvatarMUI } from "@mui/material";

type AvatarProps = {
    image: string;
};

const Avatar: React.FC<AvatarProps> = ({ image }) => {
    return <AvatarMUI src={image} />;
};

export default Avatar;
