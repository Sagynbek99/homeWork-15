import React from "react";

function DemoList(props) {
  console.log("DemoList");
  return (
    <div>
      {props.autobiography.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.surName}</li>
          <li>{item.age}</li>
          <li>{item.city}</li>
        </ul>
      ))}
    </div>
  );
}

export default DemoList;
