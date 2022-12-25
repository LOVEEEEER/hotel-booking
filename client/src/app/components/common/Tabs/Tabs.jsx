import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import TabsMUI from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TabsStyled = styled(TabsMUI)(() => ({
    padding: 0,
    color: "rgb(58, 57, 57)"
}));

const Tabs = ({ options, children, ...rest }) => {
    const [value, setValue] = useState(0);
    const handleChange = (page) => {
        setValue(page);
    };
    return (
        <div>
            <Box
                sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
            >
                <TabsStyled
                    value={value}
                    onChange={(e, page) => handleChange(page)}
                >
                    {options.map((option) => (
                        <Tab label={option.name} key={option.name} />
                    ))}
                </TabsStyled>
            </Box>
            {options.map((option, index) => (
                <div
                    key={option.name}
                    role="tabpanel"
                    hidden={value !== index}
                    {...rest}
                >
                    {value === index && (
                        <Box sx={{ paddingTop: 3 }}>{option.component}</Box>
                    )}
                </div>
            ))}
        </div>
    );
};

Tabs.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            component: PropTypes.oneOfType([
                PropTypes.node,
                PropTypes.arrayOf(PropTypes.node)
            ])
        }).isRequired
    )
};

export default Tabs;
