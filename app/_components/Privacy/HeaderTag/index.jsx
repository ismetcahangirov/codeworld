import React from "react";

const HeaderTag = ({ children }) => {
  return (
    <h6 className="text-xl md:text-2xl lg:text-3xl lg:font-semibold font-medium mb-6">
      {children}
    </h6>
  );
};

export default HeaderTag;
