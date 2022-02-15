import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import {
  deleteTaskThunk,
  loadTasksThunk,
  toggleTaskThunk,
} from "./redux/thunks/tasksThunks";

const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 40px;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80vw;
  color: white;
`;

const ToDoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;

function App() {
  const dispatch = useDispatch();

  const toDo = useSelector((state) => state.tasks);

  const deleteTask = (id) => {
    dispatch(deleteTaskThunk(id));
  };

  const toggleTask = (task) => {
    task.done = !task.done;
    dispatch(toggleTaskThunk(task));
  };

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <>
      <Title>ToDo List</Title>

      <Section>
        <Form />
      </Section>

      <Section>
        <ToDoList>
          {toDo.map((task) => (
            <Task
              key={task.id}
              task={task}
              actionOnClick={() => {
                deleteTask(task.id);
              }}
              toggle={() => {
                toggleTask(task);
              }}
            />
          ))}
        </ToDoList>
      </Section>
    </>
  );
}

export default App;
