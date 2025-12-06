import axiosApi from "./apiHelpers";

export const createDonation = (data) => {
  return axiosApi.post("/api/donation/createDonation", data);
};

export const verifyPayment = (data) => {
  return axiosApi.post("/api/donation/verifyDonationPayment", data);
}

export const getDonations = () => {
  return axiosApi.get("/api/donation/getAllDonations");
};