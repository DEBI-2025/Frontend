import styled from "styled-components";

function InputField({ placeholder, name, icon: Icon }) {
  return (
    <InputContainer>
      {Icon && <IconWrapper>{<Icon />}</IconWrapper>}
      <Field placeholder={placeholder} name={name} />
    </InputContainer>
  );
}

export default InputField;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 32rem;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  color: #0d1b2a80;
`;

const Field = styled.input`
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc) border-box;
  border: 3px solid transparent;
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 25px;
  font-size: 1rem;
  margin-bottom: 2rem;
`;
