import React from "react";
import Typography from "@mui/material/Typography";

const HeaderTitle = ({ children }) => {
    return (
        <div>
            <Typography
                variant="h3"
                fontWeight={300}
                color="initial"
                sx={{
                    p: (theme) => theme.spacing(2, 2),
                }}
            >
                {children}
            </Typography>
        </div>
    );
};

export default HeaderTitle;
