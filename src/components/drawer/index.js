import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Badge, Drawer } from "@mui/material";
import { DrawerHeader } from "./styles/drawer";
import { Avatar } from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const MiniDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const MyDrawer = ({ open, toggleDrawer }) => {
    const theme = useTheme();

    const drawerData = [
        {
            title: "Dashboard",
            Icon: DashboardRoundedIcon,
            path: "/",
        },
        {
            title: "Users",
            Icon: PersonOutlineRoundedIcon,
            path: "/users",
        },
        {
            title: "Orders",
            Icon: CreditCardRoundedIcon,
            path: "/orders",
        },
        {
            title: "Transactions",
            Icon: ListAltRoundedIcon,
            path: "/transactions",
        },
        {
            title: "Logout",
            Icon: ExitToAppRoundedIcon,
            path: "/",
        },
    ];

    const drawer = (
        <>
            <DrawerHeader
                sx={{
                    padding: open
                        ? theme.spacing(3, 3)
                        : theme.spacing(0, 2, 1),
                    alignItems: open ? "start" : "center",

                    display: open
                        ? ""
                        : {
                              xs: "none",
                              sm: "block",
                          },
                }}
            >
                {open && (
                    <>
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Typography
                                color="primary"
                                fontWeight="fontWeightBold"
                                size="small"
                                variant="h5"
                            >
                                Dashboard
                            </Typography>
                        </Link>
                        <IconButton
                            size="small"
                            sx={{
                                position: "absolute",
                                top: theme.spacing(2),
                                right: theme.spacing(2),
                                display: {
                                    sm: "none",
                                },
                            }}
                            onClick={toggleDrawer}
                        >
                            <CancelRoundedIcon
                                sx={{
                                    fontSize: "small",
                                }}
                            ></CancelRoundedIcon>
                        </IconButton>
                    </>
                )}
                <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    sx={{
                        m: (theme) => theme.spacing(2, 0, 1),
                        "& .MuiBadge-badge": {
                            color: "yellow",
                            backgroundColor: "#1BB934",
                            border: "1px solid white",
                        },
                    }}
                >
                    <Avatar
                        alt=""
                        src="https://imgs.search.brave.com/CxNiQYV7ig9a4LykPRjiXjnKACsoM5uFAvqMTwl-Sco/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly93d3cu/bm9ucHJvZml0c2Vj/dG9yc3RyYXRlZ2ll/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMTIvcGVy/c29uLmpwZw"
                        sx={{
                            width: open ? 56 : 24,
                            height: open ? 56 : 24,
                        }}
                    />
                </Badge>
                {open && (
                    <>
                        <Typography
                            variant="body1"
                            sx={{
                                color: (theme) => theme.palette.grey[800],
                            }}
                        >
                            Username
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            Senior Developer
                        </Typography>
                    </>
                )}
            </DrawerHeader>
            <Divider />
            <List>
                {drawerData.map((data, index) => (
                    <Link
                        to={data.path}
                        key={data.title}
                        style={{ textDecoration: "none" }}
                    >
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <data.Icon color="primary"></data.Icon>
                                </ListItemIcon>
                                <ListItemText
                                    primary={data.title}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={open}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>
            <MiniDrawer
                variant="permanent"
                open={open}
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
            >
                {drawer}
            </MiniDrawer>
        </>
    );
};

export default MyDrawer;
