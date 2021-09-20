import "./App.css";
import Header from "./mycomponents/Header";
import Todos from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import React, { useState } from "react";

function App() {
  const onDelete = (myinfo) => {
    // console.log(infos);
    setInfo(
      info.filter((e) => {
        return e !== myinfo;
      })
    );
  };
  const addInfo = (name) => {
    let id = info[info.length - 1].id + 1;
    const myInfo = {
      id: id,
      name: name,
    };
    setInfo([...info, myInfo]);
    console.log(myInfo);
  };
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "I am super hero",
    },
    {
      id: 2,
      name: "You can use this code",
    },
  ]);
  return (
    <>
      <Header title="TODO APP" />
      <Todos
        title="my title is here"
        addInfo={addInfo}
        info={info}
        onDelete={onDelete}
      />
      <Footer />
    </>
  );
}

export default App;
