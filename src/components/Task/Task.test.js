import { render, screen } from "@testing-library/react";
import Button from "../Button/Button";
import Task from "./Task";

describe("Given a Task component", () => {
  describe("When it receives task 'Do something'", () => {
    test("Then it should display a link with the text 'Do something'", () => {
      const task = [
        {
          id: 1,
          name: "Do something",
          done: true,
        },
      ];

      render(<Task task={task} />);

      const taskRendered = screen.getByRole("link", { name: /do something/i });

      expect(taskRendered).toBeInTheDocument();
    });
  });

  describe("When it's rendered and receives an action on click, and the user clicks it", () => {
    test("Then it should render a button with accessibility name 'delete button' and the action should be called", () => {
      render(<Button />);

      const button = screen.getByRole("button", { name: /delete button/i });

      expect(button).toBeInTheDocument();
    });
  });
});
