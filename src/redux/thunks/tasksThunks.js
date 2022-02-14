import { loadTasksAction } from "../actions/actionsCreators";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API);
  const tasks = await response.json();

  dispatch(loadTasksAction(tasks));
};
