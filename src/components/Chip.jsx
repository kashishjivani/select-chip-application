import React from "react";

const Chip = ({ chip, onRemove }) => {
  return (
    <div className="flex items-center bg-gray-400 text-black h-8 rounded-3xl p-2 m-1 mb-6">
      <img
        src={chip.avatar}
        alt="avatar"
        height={30}
        width={30}
        className="rounded-full inline-block mr-2"
      />
      <span className="mr-2">{chip.name}</span>
      <button onClick={onRemove} className="text-white font-bold">
        X
      </button>
    </div>
  );
};

export default Chip;
