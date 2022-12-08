import React from "react";

function SubHeader({title}) {
  return (
    <>
      <div className="flex items-center gap-2 flex-nowrap">
        <hr className="w-8" />
        <span className="text-sm text-gray">{title}</span>
      </div>
    </>
  );
}

export default SubHeader;
