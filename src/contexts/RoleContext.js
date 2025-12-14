import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};

export const RoleProvider = ({ children }) => {
  // For now, we'll use localStorage or a default. In production, this would come from auth
  const [role, setRole] = useState(() => {
    return localStorage.getItem("userRole") || "tutor"; // "student" or "tutor"
  });

  const updateRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("userRole", newRole);
  };

  return (
    <RoleContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
};

