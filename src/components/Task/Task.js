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
  }
`;

const Task = ({ task: { name, done }, actionOnClick }) => {
  return (
    <TaskLi>
      <Button actionOnClick={actionOnClick} />
      <a title="Do something" href="toggle">
        {name}
      </a>
    </TaskLi>
  );
};

export default Task;
