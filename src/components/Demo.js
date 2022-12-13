import React from "react";

function Demo(props) {
  console.log("DEMO");
  return (
    <div>
      <button onClick={props.onClick}>Demo</button>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  );
}
export default Demo;

// export default React.memo(Demo); /// ReactMemo бир эле жолу рендер кылат озунун памятине сактайт ___ пропс алмайынча же state озгормойунчо рендер болбойт
