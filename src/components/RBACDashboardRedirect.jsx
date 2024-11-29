import React from "react";
import { useNavigate } from "react-router-dom";

const RBACDashboardRedirect = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/"); // Redirect to the Dashboard
  };

  return (
    <div>
      <button onClick={handleRedirect}>Go to Dashboard</button>
    </div>
  );
};

export default RBACDashboardRedirect;
