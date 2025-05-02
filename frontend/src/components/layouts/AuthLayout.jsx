import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg ring w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
