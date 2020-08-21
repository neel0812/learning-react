import React from "react";

const MemoComp = ({ name }) => {
  console.log("Rendering Memo Component");

  return (
    <div>
      <h2>Memo Component</h2>
      <p>{name}</p>
    </div>
  );
};

export default React.memo(MemoComp);
