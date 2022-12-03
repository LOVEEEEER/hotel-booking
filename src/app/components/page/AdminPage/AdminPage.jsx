import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UsersTable from "../../ui/UsersTable/UsersTable";
import TabPanel from "../../common/TabPanel";
import UsersBookingList from "../../ui/admin/UsersBookingList";

const AdminPage = () => {
    const [tapPage, setTapPage] = useState(0);

    const handleChange = (page) => {
        setTapPage(page);
    };

    return (
        <main className="admin__page">
            <Box
                sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
            >
                <Tabs
                    value={tapPage}
                    onChange={(e, page) => handleChange(page)}
                    aria-label="basic tabs example"
                >
                    <Tab label="Бронирования" />
                    <Tab label="Пользователи" />
                    <Tab label="Номера" />
                </Tabs>
            </Box>
            <TabPanel value={tapPage} index={0}>
                <UsersBookingList />
            </TabPanel>
            <TabPanel value={tapPage} index={1}>
                <UsersTable />
            </TabPanel>
            <TabPanel value={tapPage} index={2}>
                Item Three
            </TabPanel>
        </main>
    );
};

export default AdminPage;
