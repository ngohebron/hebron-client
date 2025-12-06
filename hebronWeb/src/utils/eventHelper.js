import axiosApi from "./apiHelpers";

export const createEvent = (data) => {
  return axiosApi.post("/api/event/createEvent", data);
};