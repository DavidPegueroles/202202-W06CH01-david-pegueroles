import actionsTypes from "./actionsTypes";

export const loadTasksAction = (tasks) => ({
  type: actionsTypes.loadTasks,
  tasks,
});

export const deleteTaskAction = (id) => ({
  type: actionsTypes.deleteTask,
  id,
});

export const createTaskAction = (task) => ({
  type: actionsTypes.createTask,
  task,
});

export const toggleTaskAction = (id) => ({
  type: actionsTypes.toggleTask,
  id,
});
