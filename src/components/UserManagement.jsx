import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { users } from "../mock/data";
import ModalForm from "./ModalForm";

const UserManagement = () => {
  const [userList, setUserList] = useState(users);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (user) => {
    setUserList((prevUserList) => [
      ...prevUserList,
      { ...user, id: prevUserList.length + 1 },
    ]);
  };

  return (
    <Grid container sx={{ p: 3 }} justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: "8px",
            p: 3,
            backgroundColor: "#fff",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 3,
              fontWeight: "bold",
              background: "linear-gradient(45deg, #ff6f61, #6a5acd, #8bc34a)",
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              fontSize: "2.5rem",
              textShadow: "2px 2px 8px rgba(0,0,0,0.1)",
              animation: "colorChange 5s infinite alternate",
            }}
          >
            User Management
          </Typography>
          <DataGrid
            rows={userList}
            columns={[
              { field: "id", headerName: "ID", width: 100 },
              { field: "name", headerName: "Name", width: 200 },
              { field: "email", headerName: "Email", width: 200 },
              { field: "role", headerName: "Role", width: 150 },
              { field: "status", headerName: "Status", width: 150 },
              { field: "action", headerName: "Action", width: 150 },
            ]}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight
            sx={{
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#1976d2",
                color: "white",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#e3f2fd",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              width: "100%",
              backgroundColor: "#4caf50",
              "&:hover": { backgroundColor: "#388e3c" },
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={() => setModalOpen(true)}
          >
            Add User
          </Button>
        </Paper>
      </Grid>
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddUser}
        fields={[
          { name: "name", label: "Name" },
          { name: "email", label: "Email" },
          { name: "role", label: "Role" },
          { name: "status", label: "Status" },
        ]}
      />
    </Grid>
  );
};

export default UserManagement;
