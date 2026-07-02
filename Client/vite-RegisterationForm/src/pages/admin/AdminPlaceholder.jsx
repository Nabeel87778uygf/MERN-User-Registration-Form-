import React from "react";
import { useLocation } from "react-router-dom";

const AdminPlaceholder = () => {
  const location = useLocation();
  const pageName = location.pathname.split("/").pop();
  const formattedName = pageName ? pageName.charAt(0).toUpperCase() + pageName.slice(1) : "";

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
        🛠️
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        {formattedName} Page
      </h2>
      <p className="text-slate-500 max-w-md">
        This section is currently under development. Backend integration and UI elements for {formattedName} are being implemented.
      </p>
    </div>
  );
};

export default AdminPlaceholder;
