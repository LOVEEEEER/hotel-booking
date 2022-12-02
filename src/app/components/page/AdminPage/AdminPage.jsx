import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UsersTable from "../../ui/UsersTable/UsersTable";
import TabPanel from "../../common/TabPanel";

const AdminPage = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main className="admin__page">
            <Box
                sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Бронирования" />
                    <Tab label="Пользователи" />
                    <Tab label="Номера" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Бронирования
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UsersTable />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </main>
    );
};

export default AdminPage;
