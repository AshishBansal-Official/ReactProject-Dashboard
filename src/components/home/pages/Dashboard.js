import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderCard from "./HeaderCard";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { red, yellow, green, purple } from "@mui/material/colors";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
    AreaChart,
    Area,
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    ResponsiveContainer,
} from "recharts";
import CustomCard from "./CustomCard";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { Box } from "@mui/material";

const Dashboard = () => {
    const chartData = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
    ];

    const data = [{ name: "L1", value: 70 }];

    const cards = [
        {
            cardTitle: "Users",
            content: "100",
            color: red,
            Icon: PersonOutlinedIcon,
            caption: "See all users",
        },
        {
            cardTitle: "Orders",
            color: yellow,
            content: "100",
            Icon: PersonOutlinedIcon,
            caption: "View all orders",
        },
        {
            cardTitle: "Earnings",
            color: green,
            content: "$ 100",
            Icon: PersonOutlinedIcon,
            caption: "View Net Earnings",
        },
        {
            cardTitle: "Balance",
            color: purple,
            content: "$ 100",
            Icon: PersonOutlinedIcon,
            caption: "See details",
        },
    ];

    const circleSize = 100;

    return (
        <>
            <HeaderTitle>Dashboard</HeaderTitle>
            <Box sx={{ p: 2 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    {cards.map((card, index) => {
                        return (
                            <Grid item xs={12} sm={6} lg={3} key={index}>
                                <HeaderCard
                                    cardTitle={card.cardTitle}
                                    content={card.content}
                                    caption={card.caption}
                                    Icon={card.Icon}
                                    color={card.color}
                                    key={index}
                                ></HeaderCard>
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    mt={2}
                    sx={{
                        alignItems: "stretch",
                    }}
                >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CustomCard
                            cardTitle={"Total Revenue"}
                            trailing={
                                <MoreVertOutlinedIcon fontSize="small"></MoreVertOutlinedIcon>
                            }
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: (theme) => theme.spacing(1),
                                    m: (theme) => theme.spacing(2, 0),
                                }}
                            >
                                <RadialBarChart
                                    width={circleSize}
                                    height={circleSize}
                                    cx={circleSize / 2}
                                    cy={circleSize / 2}
                                    innerRadius={45}
                                    outerRadius={100}
                                    barSize={6}
                                    data={data}
                                    startAngle={90}
                                    endAngle={-270}
                                >
                                    <PolarAngleAxis
                                        type="number"
                                        domain={[0, 100]}
                                        angleAxisId={0}
                                        tick={false}
                                    />
                                    <RadialBar
                                        background
                                        clockWise
                                        dataKey="value"
                                        cornerRadius={circleSize / 2}
                                        fill="#82ca9d"
                                    />
                                    <text
                                        x={circleSize / 2}
                                        y={circleSize / 2}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="progress-label"
                                    >
                                        {"70%"}
                                    </text>
                                </RadialBarChart>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    pt={2}
                                    pb={2}
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >
                                    {"Total sales made today"}
                                </Typography>
                                <Typography variant="h4" fontWeight={300}>
                                    {"$ 420"}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    pt={2}
                                    pb={1}
                                    color="text.disabled"
                                    sx={{
                                        textAlign: "center",
                                        letterSpacing: 0,
                                    }}
                                >
                                    {
                                        "Previous transactions processing. Last payments may not be included."
                                    }
                                </Typography>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width: "100%",
                                        gap: "10px",
                                        textAlign: "center",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            fontSize="small"
                                            gutterBottom
                                        >
                                            {"Target"}
                                        </Typography>
                                        <div
                                            style={{
                                                display: "flex",
                                                color: "red",
                                            }}
                                        >
                                            <ExpandMoreRoundedIcon
                                                color="inherit"
                                                fontSize="small"
                                            ></ExpandMoreRoundedIcon>
                                            <Typography
                                                variant="body1"
                                                fontSize="small"
                                                color="inherit"
                                                sx={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                {"$12.4k"}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            fontSize="small"
                                            gutterBottom
                                        >
                                            {"Last Week"}
                                        </Typography>
                                        <div
                                            style={{
                                                display: "flex",
                                                color: "green",
                                            }}
                                        >
                                            <ExpandLessRoundedIcon
                                                color="inherit"
                                                fontSize="small"
                                            ></ExpandLessRoundedIcon>
                                            <Typography
                                                variant="body1"
                                                fontSize="small"
                                                color="inherit"
                                                sx={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                {"$12.4k"}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            fontSize="small"
                                            gutterBottom
                                        >
                                            {"Last Month"}
                                        </Typography>
                                        <div
                                            style={{
                                                display: "flex",
                                                color: "green",
                                            }}
                                        >
                                            <ExpandLessRoundedIcon
                                                color="inherit"
                                                fontSize="small"
                                            ></ExpandLessRoundedIcon>
                                            <Typography
                                                variant="body1"
                                                fontSize="small"
                                                color="inherit"
                                                sx={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                {"$12.4k"}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </CustomCard>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={8}
                        lg={9}
                        sx={{
                            "& .MuiCardContent-root": {
                                height: "100%",
                                width: "98%",
                            },
                        }}
                    >
                        <CustomCard cardTitle={"Last 6 Months (Revenue)"}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <ResponsiveContainer maxHeight="90%">
                                    <AreaChart data={chartData}>
                                        <defs>
                                            <linearGradient
                                                id="total"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="5%"
                                                    stopColor="#8884d8"
                                                    stopOpacity={0.8}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="#8884d8"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="name" stroke="gray" />
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            className="chartGrid"
                                        />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="Total"
                                            stroke="#8884d8"
                                            fillOpacity={1}
                                            fill="url(#total)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CustomCard>
                    </Grid>
                </Grid>
                <div
                    style={{
                        padding: "10px",
                    }}
                ></div>
            </Box>
        </>
    );
};

export default Dashboard;
