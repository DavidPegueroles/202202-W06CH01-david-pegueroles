import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTaskThunk } from "../../redux/thunks/tasksThunks";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  color: white;

  label {
    margin-bottom: 5px;
    font-size: 25px;
  }
  input {
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    width: 250px;
    height: 40px;

    font-size: 17px;
    background-color: transparent;
    color: white;
    border: 3px solid #53a3cf;
    border-radius: 5px;
  }

  input::placeholder {
    color: #3e6880;
  }

  button {
    font-size: 20px;
    width: 100px;
    margin-bottom: 30px;

    background-color: transparent;
    color: white;
    border: 3px solid #53a3cf;
    border-radius: 10px;
    cursor: pointer;
  }
  button:disabled {
    border: 3px solid #3e6880;
    color: #3e6880;
    cursor: default;
  }
`;

const Form = () => {
  const blankForm = { name: "" };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(blankForm);
  const resetForm = () => {
    setFormData(blankForm);
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
      done: false,
    });
  };

  const isFormInvalid = formData.name === "";

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(createTaskThunk(formData));
    resetForm();
  };

  return (
    <FormStyled noValidate autoComplete="off" onSubmit={submitForm}>
      <label htmlFor="name">Task:</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={changeData}
        placeholder="Add new task..."
      />

      <button type="submit" disabled={isFormInvalid}>
        Add
      </button>
    </FormStyled>
  );
};

export default Form;
