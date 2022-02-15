import actionsTypes from "../actions/actionsTypes";

const tasksReducer = (tasks = [], action = {}) => {
  let newTasks;

  switch (action.type) {
    case actionsTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionsTypes.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;
    case actionsTypes.createTask:
      newTasks = [...tasks, action.task];
      break;
    case actionsTypes.toggleTask:
      newTasks = tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : { ...task }
      );
      break;
    default:
      newTasks = [...tasks];
  }

  return newTasks;
};

export default tasksReducer;
