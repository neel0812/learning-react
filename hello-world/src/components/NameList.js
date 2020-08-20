import React from "react";

const NameList = () => {
  const names = ["Shubham", "John", "Mark"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>{name}</h2>
  ));
  return <div>{nameList}</div>;
};

export default NameList;
