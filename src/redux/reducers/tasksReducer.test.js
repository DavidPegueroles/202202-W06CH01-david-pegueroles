import actionsTypes from "../actions/actionsTypes";
import tasksReducer from "./tasksReducer";

describe("Given a tasksReducer function", () => {
  describe("When it receives currentTasks and an action with tasks 'Do something' and 'Do something else'", () => {
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
