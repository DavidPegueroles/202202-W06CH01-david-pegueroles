import styled from "styled-components";

const DeleteButton = styled.button`
  font-size: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Button = ({ actionOnClick }) => {
  return (
    <DeleteButton title="Delete button" onClick={actionOnClick}>
      ✘
    </DeleteButton>
  );
};

export default Button;
