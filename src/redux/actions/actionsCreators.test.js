import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
  toggleTaskAction,
} from "./actionsCreators";
import actionsTypes from "./actionsTypes";

describe("Given a loadTasksAction function", () => {
  describe("When it receives tasks 'Do something' and 'Do something else'", () => {
    test("Then it should", () => {
      const tasks = [
        {
          name: "Do something",
          done: "true",
          id: 1,
        },
        {
          name: "Do something else",
          done: "false",
          id: 2,
        },
      ];

      const expectedAction = {
        type: actionsTypes.loadTasks,
        tasks,
      };

      const action = loadTasksAction(tasks);

      expect(expectedAction).toEqual(action);
    });
  });
});

describe("Given a deleteTaskAction function", () => {
  describe("When it receives id 1", () => {
    test("Then it should return action with id 1", () => {
      const id = 1;

      const expectedAction = {
        type: actionsTypes.deleteTask,
        id,
      };

      const action = deleteTaskAction(id);

      expect(expectedAction).toEqual(action);
    });
  });
});

describe("Given a createTaskAction function", () => {
  describe("When it receives task 'Do something please'", () => {
    test("Then it should return action with task 'Do something please'", () => {
      const task = "Do something please";

      const expectedAction = {
        type: actionsTypes.createTask,
        task,
      };

      const action = createTaskAction(task);

      expect(expectedAction).toEqual(action);
    });
  });
});

describe("Given a toggleTaskAction function", () => {
  describe("When it receives id 1", () => {
    test("Then it should return action with id 1", () => {
      const id = 1;

      const expectedAction = {
        type: actionsTypes.toggleTask,
        id,
      };

      const action = toggleTaskAction(id);

      expect(expectedAction).toEqual(action);
    });
  });
});
