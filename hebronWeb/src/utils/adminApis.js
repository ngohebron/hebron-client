import axiosApi from "./apiHelpers";

export const AdminLogin = (data) => {
  return axiosApi.post("/api/admin/login", data);
};

export const SendEmail = (data) => {
  return axiosApi.post("/api/admin/sendEmail", data);
};