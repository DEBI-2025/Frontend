import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth/jwt/create/";

export const login = async (email, password) => {
  //console.log(email,password)
  try {
    const { data } = await axios.post(
      API_URL,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return {
        success: false,
        message: "Invalid credentials, please try again.",
      };
    }
    return {
      success: false,
      message: "An error occurred during login. Please try again.",
    };
  }
};
