import React from "react";
import PropTypes from "prop-types";
import AvatarMUI from "@mui/material/Avatar";

const Avatar = ({ image, ...rest }) => {
    return <AvatarMUI src={image} {...rest} />;
};

Avatar.propTypes = {
    image: PropTypes.string.isRequired
};

export default Avatar;
