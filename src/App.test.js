import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given an App component", () => {
  describe("When it's rendered with providers", () => {
    test("Then it should contain a heading with text 'ToDo List'", () => {
      renderWithProviders(<App />);

      const linkElement = screen.getByRole("heading", { name: /todo list/i });

      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("When it receives 'Do something' and 'Do something else' tasks from the provider", () => {
    test("Then it should display 'Do something' and 'Do something else' inside", async () => {
      renderWithProviders(<App />);

      const expectedFirstTask = await screen.findByText("Do something");
      const expectedSecondTask = await screen.findByText("Do something else");

      expect(expectedFirstTask).toBeInTheDocument();
      expect(expectedSecondTask).toBeInTheDocument();
    });
  });

  describe("When it's rendered with provider and a delete function is clicked", () => {
    test("Then it should delete the 'Do something else'", async () => {
      renderWithProviders(<App />);

      const expectedFirstTask = await screen.findByText("Do something");
      const expectedSecondTask = await screen.findByText("Do something else");

      const deleteButton = screen.getAllByRole("button", {
        name: "Delete button",
      });
      userEvent.click(deleteButton[0]);

      await waitFor(async () =>
        expect(expectedFirstTask).not.toBeInTheDocument()
      );

      expect(expectedSecondTask).toBeInTheDocument();
      expect(expectedFirstTask).not.toBeInTheDocument();
    });
  });
});
