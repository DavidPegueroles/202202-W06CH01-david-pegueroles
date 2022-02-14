import actionsTypes from "./actionsTypes";

export const loadTasksAction = (tasks) => ({
  type: actionsTypes.loadTasks,
  tasks,
});
