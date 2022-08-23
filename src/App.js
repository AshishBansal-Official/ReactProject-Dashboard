import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Drawer, Home } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function MiniDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Drawer open={open} toggleDrawer={toggleDrawer}></Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Routes>
                        <Route
                            exact
                            path="/*"
                            element={<Home toggleDrawer={toggleDrawer}></Home>}
                        />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}
