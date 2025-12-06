import axiosApi from "./apiHelpers";

export const createDonation = (data) => {
  return axiosApi.post("/api/donation/createDonation", data);
};