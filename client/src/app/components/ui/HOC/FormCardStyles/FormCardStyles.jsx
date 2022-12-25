import React from "react";
import PropTypes from "prop-types";
import "./scss/form-card.scss";

const FormCardStyles = ({ children }) => {
    return <div className="form-card">{children}</div>;
};

FormCardStyles.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default FormCardStyles;
