import styled from "styled-components";

function InputField({
  type,
  placeholder,
  name,
  icon: Icon,
  margin,
  value,
  onChange,
  toggle,     
  onToggle,
  toggleIcon,
}) {
  return (
    <InputContainer>
      {Icon && <IconWrapper>{<Icon />}</IconWrapper>}
      <Field
        placeholder={placeholder}
        name={name}
        type={type}
        margin={margin}
        value={value}
        onChange={onChange}
      />
      {toggle && (<ToggleIcon onClick = {onToggle}>
        {toggleIcon}
      </ToggleIcon>
        )

      }
    </InputContainer>
  );
}

export default InputField;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 1rem;
  top: 0.9rem;
  color: #0d1b2a80;
  @media (max-width: 1024px) {
    left: 2rem;
    top: 0.6rem;
  }
  @media (max-width: 768px) {
    left: 1.4rem;
  }
`;

const Field = styled.input`
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc) border-box;
  border: 3px solid transparent;
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 25px;
  font-size: 1rem;
  color: grey;
  margin-bottom: ${({ margin }) => margin || "2rem"};
  @media (max-width: 1024px) {
    margin-bottom: 0.7rem;
    height: 0.5rem;
    width: 80%;
  }
  @media (max-width: 768px) {
    height: 0.5rem;
    font-size: 0.9rem;
  }
  @media (max-width: 550px) {
    margin-bottom: 0.5rem;
  }
`;
const ToggleIcon = styled.div`
  position: absolute;
  top: 45%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;
  font-size: 1.4rem;
`;