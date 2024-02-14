import React from 'react';
import { useParams } from 'react-router-dom';
import {useEffect, useContext} from 'react';
import { GlobalContext } from '@/core';
import './task-info.styles.css';

export const TaskInfo = () => {

    const { state, getOneTask, changeStatusTask } = useContext(GlobalContext);
    const { task, tasks } = state || {};
   const params = useParams();



     useEffect(() => {
      getOneTask(params.id);

     }, [tasks]);


    return (
      <>
        <h1>Task Info</h1>
        <div>
          <h3>
            <span className="spanKey">Title: </span>
            <span className="spanValue">{task?.title}</span>
          </h3>
          <h3>
            <span className="spanKey">user ID: </span>
            <span className="spanValue">{task?.userId}</span>
          </h3>
          <h3>
            <span className="spanKey">status: </span>
            <span className="spanValue">
              {task?.completed ? "Complete" : "Uncomplete"}
            </span>
            &nbsp;
            <button onClick={() =>  changeStatusTask(task.id)}>change status</button>
          </h3>
        </div>
      </>
    );
}