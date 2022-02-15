import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
} from "../actions/actionsCreators";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API);
  const tasks = await response.json();

  dispatch(loadTasksAction(tasks));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API}${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};

export const createTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  dispatch(createTaskAction(newTask));
};
