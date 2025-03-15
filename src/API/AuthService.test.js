import axios from "axios";
import { login } from "./AuthService";

jest.mock("axios");

describe("AuthService - login", () => {
  it("should return data on successful login", async () => {
    const responseData = { access: "token", refresh: "refresh_token" };
    axios.post.mockResolvedValue({ data: responseData });

    const result = await login("test@example.com", "password123");

    expect(result).toEqual(responseData);
    expect(axios.post).toHaveBeenCalledWith(
      "http://127.0.0.1:8000/auth/jwt/create/",
      { email: "test@example.com", password: "password123" },
      { headers: { "Content-Type": "application/json" } }
    );
  });

  it("should return an error message on failed login", async () => {
    axios.post.mockRejectedValue({
      response: { status: 401 },
    });

    const result = await login("wrong@example.com", "wrongpassword");

    expect(result).toEqual({
      success: false,
      message: "Invalid credentials, please try again.",
    });
  });

  it("should return a generic error message on network failure", async () => {
    axios.post.mockRejectedValue(new Error("Network Error"));

    const result = await login("test@example.com", "password123");

    expect(result).toEqual({
      success: false,
      message: "An error occurred during login. Please try again.",
    });
  });
});
