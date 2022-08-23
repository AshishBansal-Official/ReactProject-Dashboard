import React from "react";
import NavBar from "./navbar";
import Box from "@mui/material/Box";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Orders from "./pages/Orders";

const Home = ({ toggleDrawer }) => {
    return (
        <>
            <NavBar toggleDrawer={toggleDrawer}></NavBar>
            <Box
                sx={{
                    p: 3,
                    maxWidth: "1800px",
                }}
            >
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="users" element={<Users />}></Route>
                    <Route path="orders" element={<Orders />}></Route>
                    <Route
                        path="transactions"
                        element={<Transactions />}
                    ></Route>
                </Routes>
            </Box>
        </>
    );
};

export default Home;
