import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../setupTests";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it does not receive an input", () => {
    test("Then it should have the button disabled", () => {
      renderWithProviders(<Form />);

      const submitButton = screen.getByRole("button", { name: /add/i });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When it receives 'Do something please' input", () => {
    test("Then it should not have the button disabled", () => {
      const taskToCreate = "Do something please";

      renderWithProviders(<Form />);

      const task = screen.getByLabelText(/task:/i);

      userEvent.type(task, taskToCreate);

      const submitButton = screen.getByRole("button", { name: /add/i });

      expect(submitButton).not.toBeDisabled();
    });
  });
});
