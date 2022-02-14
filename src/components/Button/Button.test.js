import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered and receives an action on click, and the user clicks it", () => {
    test("Then it should render a button with accessibility name 'delete button' and the action should be called", () => {
      const mockedFuncion = jest.fn();

      render(<Button actionOnClick={mockedFuncion} />);

      const button = screen.getByRole("button", { name: /delete button/i });
      userEvent.click(button);

      expect(mockedFuncion).toHaveBeenCalled();
    });
  });
});
