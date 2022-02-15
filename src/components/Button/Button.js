import styled from "styled-components";

const DeleteButton = styled.button`
  font-size: 35px;
  background-color: transparent;
  color: #53a3cf;
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
