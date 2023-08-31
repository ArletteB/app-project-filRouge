import api from "./api.service";

const EVENT_ENDPOINT = "/events";
const createEvent = async (eventData: FormData) => {
  try {
    const response = await api.post(EVENT_ENDPOINT, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const EventService = {
  createEvent,
};

export default EventService;
