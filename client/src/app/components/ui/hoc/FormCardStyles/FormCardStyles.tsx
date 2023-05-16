import React from "react";

type FormCardStylesProps = {
    children: React.ReactNode;
};

const FormCardStyles: React.FC<FormCardStylesProps> = ({ children }) => {
    return <div className="form-card">{children}</div>;
};

export default FormCardStyles;
