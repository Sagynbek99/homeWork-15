import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoList from "./components/DemoList";
import Demo from "./components/Demo";

const autobiography = [
  {
    id: 1,
    name: "Alina",
    surName: "Japarova",
    age: 30,
    city: "Bishkek",
  },
];

function App() {
  console.log("APP");

  const [show, setShow] = useState(false);
  const [letShow, setLetShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev);
  };
  const demoHandler = useCallback(() => {
    /// React.memo компонентерге иштесе useCallback функцияга иштейт
    /// компонентер рендер болгондо кайра кайра функция жаралбай озундун бир памятине сактап кой
    /// компонент ререндер болгондо ушул функцияны кайтарып бер
    setLetShow(true);
  }, []);
  // const user = {
  //   name: "Alina",
  //   age: 30,
  // };

  const user1 = useMemo(() => {
    // for (let i = 0; i < 100; i++) {
    //   console.log(i);
    // }
    // useMemo памитине сактайт кийин керек болгондо бизге памятине сакталганын берет
    return {
      name: "Alina",
      age: 30,
    };
  }, []);

  // const demoHandler = () => {
  //   setLetShow(true);
  // };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={showHandler}>Click Me</Button>
      <Demo onClick={demoHandler} user={user1} />
      <DemoList autobiography={autobiography} />
    </div>
  );
}

export default App;
