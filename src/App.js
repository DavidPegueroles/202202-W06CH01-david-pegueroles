import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Task from "./components/Task/Task";
import { loadTasksThunk } from "./redux/thunks/tasksThunks";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
  width: 70vw;
`;

const ToDoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  border: 1px solid yellowgreen;
`;

function App() {
  const dispatch = useDispatch();

  const toDo = useSelector((state) => state.tasks);
  console.log(toDo);

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <>
      <Section>
        <ToDoList>
          {toDo.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ToDoList>
      </Section>
    </>
  );
}

export default App;
