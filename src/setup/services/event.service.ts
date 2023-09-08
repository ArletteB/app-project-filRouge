import api from "./api.service";

const EVENT_ENDPOINT = "/events";

const createEvent = async (eventData: FormData, creatorUserId: string) => {
  try {
    const response = await api.post(`/events/${creatorUserId}`, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getEventsByPostalCode = async (postalCode: string) => {
  try {
    const response = await api.get(
      `${EVENT_ENDPOINT}?postalCode=${postalCode}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const EventService = {
  createEvent,
  getEventsByPostalCode,
};

export default EventService;
