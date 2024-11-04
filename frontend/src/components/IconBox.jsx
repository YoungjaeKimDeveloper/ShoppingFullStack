import React from "react";

const IconBox = ({ icon }) => {
  return (
    <div className="icon cursor-pointer rounded-xl bg-gray-200 p-2 opacity-75 transition-all duration-500 hover:opacity-100">
      {icon}
    </div>
  );
};

export default IconBox;
