import { deleteTaskAction, loadTasksAction } from "../actions/actionsCreators";

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
