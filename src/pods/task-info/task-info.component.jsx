import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {useEffect, useContext} from 'react';
import { GlobalContext } from '@/core';
import { switchRoutes } from '@/router/constants-routes';
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
        <Link to={switchRoutes.root}>Go back</Link>
        <div>
          <h3>
            <span className="spanKey">Title: </span>
            <span className="spanValue">{task?.title}</span>
          </h3>
          <h3>
            <span className="spanKey">user ID: </span>
            <span className="spanValue">{task?.userId}</span>
          </h3>
          <h3 className="statusContainer">
            <span className="spanKey">status: </span>
            <span className="spanValue spanStatus">
              {task?.completed ? "Complete" : "Uncomplete"}
            </span>
            <button onClick={() => changeStatusTask(task.id)}>
              change status
            </button>
          </h3>
        </div>
      </>
    );
}