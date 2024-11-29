import React from "react";
import { permissions } from "../mock/data";

const PermissionManagement = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Permission Management</h2>
        <ul style={styles.list}>
          {permissions.map((permission, index) => (
            <li key={index} style={styles.greyBox}>
              {permission}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "lightblue",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "blue",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  greyBox: {
    backgroundColor: "#d3d3d3", // Grey background for all permissions
    borderRadius: "8px",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
};

export default PermissionManagement;
