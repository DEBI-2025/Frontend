import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const token = Cookies.get("innerViews-access-token");
  return !!token;
};
