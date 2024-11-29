import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container direction="column" spacing={3} sx={{ p: 3, marginTop: "50px" }}> {/* Added marginTop */}
      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: "#4caf50",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            width: "800px",
            margin: "0 auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total Users
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            25
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: "#1976d2",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            width: "800px",
            margin: "0 auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Roles Defined
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            5
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: "#ff9800",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            width: "800px",
            margin: "0 auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Permissions Assigned
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            12
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
