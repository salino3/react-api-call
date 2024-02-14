import {  CHANGE_STATUS_TASK, GET_TASK, GET_TASKS } from "./types";

export const MyReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
      };
    case GET_TASK:
      return {
        ...state,
        task: payload,
      };
    case CHANGE_STATUS_TASK:
      return {
        ...state,
        tasks: payload,
      };

    default:
      return state;
  }
}