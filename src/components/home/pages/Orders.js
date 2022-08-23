import HeaderTitle from "./HeaderTitle";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "../../../services/orders";

const Orders = () => {
    return (
        <>
            <HeaderTitle>Orders</HeaderTitle>
            <Box sx={{ p: 2, maxHeight: "70vh" }}>
                <TableContainer component={Paper} sx={{ height: "100%" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Customer</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Payment Method</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src={row.img}
                                                alt=""
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    borderRadius: "50%",
                                                    marginRight: "10px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            {row.product}
                                        </div>
                                    </TableCell>
                                    <TableCell>{row.customer}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                    <TableCell>{row.method}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default Orders;
