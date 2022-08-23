import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../services/userData";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import { Box } from "@mui/material";

const Users = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                        }}
                    >
                        <Link
                            to="/users/test"
                            style={{ textDecoration: "none" }}
                        >
                            <div
                                style={{
                                    padding: "2px 5px",
                                    borderRadius: "5px",
                                    color: "darkblue",
                                    border: "1px dotted rgba(0, 0, 139, 0.596)",
                                    cursor: "pointer",
                                }}
                            >
                                View
                            </div>
                        </Link>
                        <div
                            style={{
                                padding: "2px 5px",
                                borderRadius: "5px",
                                color: "crimson",
                                border: "1px dotted rgba(220, 20, 60, 0.6)",
                                cursor: "pointer",
                            }}
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <>
            <HeaderTitle>Users</HeaderTitle>
            <Box sx={{ p: 2, height: "70vh" }}>
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                />
            </Box>
        </>
    );
};

export default Users;
