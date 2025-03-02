import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Button({ onClick, type, children, width, fontSize, height }) {
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => navigate(onClick)}
      type={type}
      width={width}
      fontSize={fontSize}
      height={height}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
const Wrapper = styled.button`
  width: ${({ width }) => width || "40rem"};
  height: ${({ height }) => height || "3.2rem"};
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  font-family: Roboto Slab;
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
  background: ${({ type }) =>
    type === "transparent"
      ? "transparent"
      : "linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc)"};
  border: ${({ type }) =>
    type === "transparent" ? "2px solid white" : "none"};

  color: white;
  letter-spacing: 1px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    width: 30rem;
    height: 2.9rem;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    width: 23rem;
    height: 2.4rem;
    font-size: 1.2rem;
  }
  @media (max-width: 550px) {
    width: 20rem;
  }
`;
