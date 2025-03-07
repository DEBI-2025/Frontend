import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "../validation"; 

export function useSignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const signUpMutation = useMutation({
    mutationFn: async (userData) => {
      const response = await axios.post(
        "http://localhost:8000/auth/users/", 
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      alert("Sign up successful! Please login.");
      navigate("/login");
    },
    onError: (error) => {
      console.error("Error signing up:", error);
      alert("An error occurred during sign up. Please try again.");
    },
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const requestBody = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone: values.phone,
        date_of_birth: values.dateOfBirth,
        password: values.password,
        re_password: values.confirmPassword,
      };

      signUpMutation.mutate(requestBody);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isLoading: signUpMutation.isLoading,
  };
}
