import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import renderWithProviders from "./setupTests";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain a heading with text 'ToDo List'", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const linkElement = screen.getByRole("heading", { name: /todo list/i });

      expect(linkElement).toBeInTheDocument();
    });
  });
});

describe("Given a TaskListComponent", () => {
  describe("When it receives 'Do something' and 'Do something else' tasks", () => {
    test("Then it should display 'Do something' and 'Do something else' inside", async () => {
      renderWithProviders(<App />);

      const expectedFirstTask = await screen.findByText("Do something");
      const expectedSecondTask = await screen.findByText("Do something else");

      expect(expectedFirstTask).toBeInTheDocument();
      expect(expectedSecondTask).toBeInTheDocument();
    });
  });
});
