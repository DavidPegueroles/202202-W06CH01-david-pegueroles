import actionsTypes from "../actions/actionsTypes";
import tasksReducer from "./tasksReducer";

describe("Given a tasksReducer function", () => {
  describe("When it receives currentTasks and loadTasks action with tasks 'Do something' and 'Do something else'", () => {
    test("Then it should return tasks 'Do something' and 'Do something else'", () => {
      const currentTasks = [];

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

      const action = {
        type: actionsTypes.loadTasks,
        tasks,
      };

      const reducerResult = tasksReducer(currentTasks, action);

      expect(reducerResult).toEqual(tasks);
    });
  });

  describe("When it receives currentTasks with 'Do something' & 'Do something else', and deleteTask action with id 2", () => {
    test("Then it should return task 'Do something''", () => {
      const currentTasks = [
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

      const id = 2;

      const action = {
        type: actionsTypes.deleteTask,
        id,
      };

      const expectedTask = [
        {
          name: "Do something",
          done: "true",
          id: 1,
        },
      ];

      const reducerResult = tasksReducer(currentTasks, action);

      expect(reducerResult).toEqual(expectedTask);
    });
  });

  describe("When it receives currentTasks with 'Do something' & 'Do something else', and createTask action with 'Do something please'", () => {
    test("Then it should return the three tasks", () => {
      const currentTasks = [
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

      const task = {
        name: "Do something please",
        done: "false",
        id: 3,
      };

      const action = {
        type: actionsTypes.createTask,
        task,
      };

      const reducerResult = tasksReducer(currentTasks, action);

      expect(reducerResult).toHaveLength(3);
    });
  });

  describe("When it receives currentTasks and a non existing action with tasks 'Do something' and 'Do something else'", () => {
    test("Then it should return currentTasks", () => {
      const currentTasks = [];

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

      const action = {
        type: actionsTypes.jeje,
        tasks,
      };

      const reducerResult = tasksReducer(currentTasks, action);

      expect(reducerResult).toEqual(currentTasks);
    });
  });

  describe("When it doesn't receive tasks nor action", () => {
    test("Then it should return an empty array", () => {
      const reducerResult = tasksReducer();

      expect(reducerResult).toHaveLength(0);
    });
  });
});
