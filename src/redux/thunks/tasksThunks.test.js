import { deleteTaskThunk, loadTasksThunk } from "./tasksThunks";

describe("Given a loadTasksThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadTasksThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a addTaskThunk inner function", () => {
  describe("When it is called", () => {
    test("Then it should add one tast given to the state", async () => {
      const dispatch = jest.fn();
      const id = 1;

      const deleteThunk = deleteTaskThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
