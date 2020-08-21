import React from "react";

const Columns = () => {
  return (
    // <React.Fragment>
    // we can pass key in fragments
    <>
      {/* we cannot do that in <> */}
      <td>Name</td>
      <td>Shubham</td>
    </>
    //{" "}
    // </React.Fragment>
  );
};

export default Columns;
