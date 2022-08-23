import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CustomCard = ({ cardTitle, trailing, children }) => {
    return (
        <Card
            sx={{
                boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
                height: "100%",
            }}
        >
            <CardContent>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {cardTitle}
                    </Typography>
                    {trailing}
                </div>
                <div
                    style={{
                        height: "100%",
                    }}
                >
                    {children}
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
