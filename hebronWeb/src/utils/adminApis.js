import axiosApi from "./apiHelpers";

export const AdminLogin = (data) => {
  return axiosApi.post("/api/admin/login", data);
};