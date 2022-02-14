import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

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
