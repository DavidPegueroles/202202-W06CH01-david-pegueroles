import { loadTasksAction } from "./actionsCreators";
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
