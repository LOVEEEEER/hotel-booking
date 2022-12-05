import React from "react";
import PropTypes from "prop-types";

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
