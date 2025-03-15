import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("renders the button with default props", () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("navigates on click", () => {
  render(<Button onClick="/home">Go Home</Button>);
  const buttonElement = screen.getByText(/go home/i);
  fireEvent.click(buttonElement);
  expect(mockNavigate).toHaveBeenCalledWith("/home");
});
