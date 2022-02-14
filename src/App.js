import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Task from "./components/Task/Task";
import { deleteTaskThunk, loadTasksThunk } from "./redux/thunks/tasksThunks";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70vw;
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

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <>
      <h1>ToDo List</h1>
      <Section>
        <ToDoList>
          {toDo.map((task) => (
            <Task
              key={task.id}
              task={task}
              actionOnClick={() => {
                deleteTask(task.id);
              }}
            />
          ))}
        </ToDoList>
      </Section>
    </>
  );
}

export default App;
