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

describe("Given a deleteTaskThunk inner function", () => {
  describe("When it is called with id 1", () => {
    test("Then it should call the dispatch and add one task given to the state", async () => {
      const dispatch = jest.fn();
      const id = 1;

      const deleteThunk = deleteTaskThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with id 3", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();
      const id = 3;

      const deleteThunk = deleteTaskThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
