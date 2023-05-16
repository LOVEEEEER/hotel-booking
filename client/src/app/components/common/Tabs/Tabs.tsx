import React, { useState } from "react";
import { Tabs as TabsMUI, Tab, Box, styled } from "@mui/material";

const TabsStyled = styled(TabsMUI)(() => ({
    padding: 0,
    color: "rgb(58, 57, 57)"
}));

type TabsProps = {
    options: { name: string; component: React.ReactNode }[];
    children?: React.ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ options, children }) => {
    const [value, setValue] = useState(0);
    const handleChange = (page: number) => {
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
                <div key={option.name} role="tabpanel" hidden={value !== index}>
                    {value === index && (
                        <Box sx={{ paddingTop: 3 }}>{option.component}</Box>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
