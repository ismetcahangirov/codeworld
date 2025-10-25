import React from "react";

const Input = ({ inp, placeholder, value, name, action, error }) => {
  const baseClass = "w-full p-2.5  focus:outline-none border-none bg-white";
  const errorClass = error ? "border border-red-500" : "border border-gray-300";

  return inp ? (
    <div className="flex flex-col gap-1 w-full">
      <div className="w-full bg-white overflow-hidden rounded-lg">
        <input
          style={{ boxShadow: "inset 0 -4px 6px rgba(0,0,0,0.3)" }}
          type="text"
          name={name}
          value={value}
          onChange={action}
          placeholder={placeholder}
          className={baseClass + errorClass}
        />
      </div>
      {error && <span className="text-red-500 text-sm ">{error}</span>}
    </div>
  ) : (
    <div className="flex flex-col gap-1 w-full h-[155px] lg:h-[220px]">
      <div className="w-full h-full bg-white overflow-hidden rounded-lg">
        <textarea
          style={{ boxShadow: "inset 0 -4px 10px rgba(0,0,0,0.3)" }}
          name={name}
          value={value}
          onChange={action}
          placeholder={placeholder}
          className={baseClass + errorClass + " h-full resize-none"}
        ></textarea>
      </div>
      {error && <span className="text-red-500 text-sm h-max">{error}</span>}
    </div>
  );
};

export default Input;
