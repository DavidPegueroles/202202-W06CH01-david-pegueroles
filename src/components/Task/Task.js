import styled from "styled-components";
import Button from "../Button/Button";

const TaskLi = styled.li`
  font-size: 30px;
  list-style: none;
  margin: 10px;

  a {
    text-decoration: none;
    color: white;
  }
  .done {
    text-decoration: line-through;
    color: #3e6880;
  }
`;

const Task = ({ task: { name, done }, actionOnClick, toggle }) => {
  const toggleOnClick = (event) => {
    event.preventDefault();
    toggle();
  };

  return (
    <TaskLi>
      <Button actionOnClick={actionOnClick} />
      <a
        title="Do something"
        href="toggle"
        className={done ? "done" : ""}
        onClick={toggleOnClick}
      >
        {name}
      </a>
    </TaskLi>
  );
};

export default Task;
