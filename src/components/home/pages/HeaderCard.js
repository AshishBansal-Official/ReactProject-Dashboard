import React from "react";
import Typography from "@mui/material/Typography";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { red } from "@mui/material/colors";
import CustomCard from "./CustomCard";

const HeaderCard = ({
    cardTitle,
    color = red,
    content = "",
    Icon = PersonOutlinedIcon,
    caption = "",
}) => {
    const trailing = (
        <div style={{ display: "flex", color: "green" }}>
            <ExpandLessRoundedIcon color="inherit"></ExpandLessRoundedIcon>
            <Typography variant="body1" color="inherit">
                20%
            </Typography>
        </div>
    );

    return (
        <CustomCard cardTitle={cardTitle} trailing={trailing}>
            <Typography variant="h4" fontWeight={300}>
                {content}
            </Typography>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="caption"
                    fontWeight={300}
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    {caption}
                </Typography>
                <div
                    style={{
                        backgroundColor: color[100],
                        display: "flex",
                        alignItems: "center",
                        padding: "4px",
                        borderRadius: "4px",
                    }}
                >
                    <Icon
                        fontSize="small"
                        sx={{
                            color: color[400],
                        }}
                    ></Icon>
                </div>
            </div>
        </CustomCard>
    );
};

export default HeaderCard;
