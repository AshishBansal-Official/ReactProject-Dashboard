import React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";

const NavBar = ({ toggleDrawer }) => {
    const location = useLocation();
    return (
        <>
            <Box
                sx={{
                    p: (theme) => theme.spacing(2, 2),
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <IconButton size="medium" onClick={toggleDrawer}>
                    <MenuIcon
                        sx={{
                            fontSize: "large",
                        }}
                    ></MenuIcon>
                </IconButton>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    sx={{ p: (theme) => theme.spacing(0, 2) }}
                >
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <HomeIcon fontSize="small"></HomeIcon>
                    </Link>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.grey[500],
                            fontSize: "medium",
                            textTransform: "capitalize",
                        }}
                    >
                        {location.pathname.replace("/", "")}
                    </Typography>
                </Breadcrumbs>
                <div style={{ flex: 1 }}></div>
                <Badge
                    badgeContent={4}
                    color="primary"
                    sx={{
                        "& .MuiBadge-badge": {
                            fontSize: 9,
                            height: 15,
                            minWidth: 15,
                        },

                        m: (theme) => theme.spacing(0, 1),
                    }}
                >
                    <NotificationsNoneOutlinedIcon
                        color="action"
                        fontSize="small"
                    />
                </Badge>
                <Badge
                    badgeContent={4}
                    sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: (theme) => theme.palette.grey[400],
                            color: (theme) =>
                                theme.palette.primary.contrastText,
                            fontSize: 9,
                            height: 15,
                            minWidth: 15,
                        },
                        m: (theme) => theme.spacing(0, 1),
                    }}
                >
                    <MailOutlineIcon color="action" fontSize="small" />
                </Badge>
                <Badge
                    sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: (theme) => theme.palette.grey[400],
                            color: (theme) =>
                                theme.palette.primary.contrastText,
                            fontSize: 9,
                            height: 15,
                            minWidth: 15,
                        },
                        m: (theme) => theme.spacing(0, 1),
                    }}
                >
                    <PowerSettingsNewOutlinedIcon
                        color="action"
                        fontSize="small"
                    />
                </Badge>
            </Box>
        </>
    );
};

export default NavBar;
