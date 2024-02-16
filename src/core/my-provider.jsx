import React from "react";
import { GlobalContext } from "./global-context";
import { MyReducer } from "./reducer";
import { CHANGE_STATUS_TASK, GET_TASK, GET_TASKS, initialState } from "./types";

export const MyProvider = ({children}) => {


    const [state, dispatch] = React.useReducer(MyReducer, );
    
    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const res = await response.json();
            dispatch({
              type: GET_TASKS,
              payload: res?.slice(-20),
            });
    };

    const getOneTask = async (id) => {
        const task = state?.tasks?.find(task => task.id == id);
        console.log(task)
        dispatch({
            type: GET_TASK,
            payload: task
        });
    };

    const changeStatusTask = (id) => {

         dispatch({
           type: CHANGE_STATUS_TASK,
           payload: state?.tasks?.map(task => task.id == id ? {...task, completed: !task.completed} : task)
         });
    };
        
    React.useEffect(() => {
        fetchData();
    }, []);

    return (
      <GlobalContext.Provider value={{ state, getOneTask, changeStatusTask }}>
        {children}
      </GlobalContext.Provider>
    );
}