import React from "react";

const NameList = () => {
  const names = ["Shubham", "John", "Mark"];
  let key = 0;
  const nameList = names.map((name) => {
    key += 1;
    return <h2 key={key}>{name}</h2>;
  });
  return <div>{nameList}</div>;
};

export default NameList;
