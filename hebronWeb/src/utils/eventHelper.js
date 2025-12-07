import axiosApi from "./apiHelpers";

export const createEvent = (data) => {
  return axiosApi.post("/api/event/createEvent", data);
};

export const getAllEvents = () => {
  return axiosApi.get("/api/event/getAllEvents");
}

export const deleteEvent = (eventId) => {
  return axiosApi.delete(`/api/event/deleteEvent/${eventId}`);
}