import React, { useState } from "react";
import { roles } from "../mock/data";

const RoleManagement = () => {
  const [roleList, setRoleList] = useState(roles);
  const [newRoleName, setNewRoleName] = useState("");
  const [newRolePermissions, setNewRolePermissions] = useState("");
  const [isAddingRole, setIsAddingRole] = useState(false);

  const handleAddRole = () => {
    const permissions = newRolePermissions.split(",").map((perm) => perm.trim());
    setRoleList([
      ...roleList,
      { name: newRoleName, permissions, id: roleList.length + 1 },
    ]);
    setNewRoleName("");
    setNewRolePermissions("");
    setIsAddingRole(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Role Management</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableHeader, textAlign: "left" }}>
                Role Name
              </th>
              <th style={{ ...styles.tableHeader, textAlign: "left" }}>
                Permissions
              </th>
            </tr>
          </thead>
          <tbody>
            {roleList.map((role) => (
              <tr key={role.id} style={styles.tableRow}>
                <td style={styles.tableData}>{role.name}</td>
                <td style={styles.tableData}>{role.permissions.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {isAddingRole ? (
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Role Name"
              value={newRoleName}
              onChange={(e) => setNewRoleName(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Permissions (comma separated)"
              value={newRolePermissions}
              onChange={(e) => setNewRolePermissions(e.target.value)}
              style={styles.input}
            />
            <div style={styles.buttonContainer}>
              <button onClick={handleAddRole} style={styles.addButton}>
                Add Role
              </button>
              <button
                onClick={() => setIsAddingRole(false)}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setIsAddingRole(true)} style={styles.addButton}>
            Add Role
          </button>
        )}
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
        background: "lightblue", // Light grey background
      }
      ,
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    width: "600px",
    textAlign: "center",
    border: "1px solid #e0e0e0",
  },
  header: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "26px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "14px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
  },
  tableRow: {
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #f0f0f0",
    padding: "12px",
  },
  tableData: {
    padding: "12px 20px",
    fontSize: "14px",
    color: "#333",
    textAlign: "left", 
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border 0.3s ease",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
};

export default RoleManagement;
