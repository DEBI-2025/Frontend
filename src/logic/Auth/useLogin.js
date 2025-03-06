import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../API/AuthService";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: (data) => {
      Cookies.set("innerViews-refresh-token", data.refresh);
      Cookies.set("innerViews-access-token", data.access);
    //   queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
      toast.success("Welcome :)");
      navigate("/", { replace: true });

    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.log(err?.response?.data?.message);
    },
  });
  return { login, isLoading };
};
