import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const ModalForm = ({ isOpen, onClose, onSubmit, fields }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          p: 4,
          boxShadow: 24,
        }}
      >
        <form>
          {fields.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              fullWidth
              sx={{ mb: 2 }}
              onChange={handleChange}
            />
          ))}
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalForm;
