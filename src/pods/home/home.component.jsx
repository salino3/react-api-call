import React from "react";
import { GlobalContext } from "@/core";
import { CardTasks } from "@/common-app";
import './home.styles.css'


export const Home = () => {

  const {state} = React.useContext(GlobalContext);
  const {tasks} = state || {};


  return (
    <>
      <h1>Home page</h1>
      <ul className="containerList">
        {
          tasks && tasks.map((task) => (
            <CardTasks task={task} />
          ))
        }
      </ul>

    </>
  );
};
