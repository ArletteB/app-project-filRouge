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

const getEventById = async (eventId: string) => {
  try {
    const response = await api.get(`${EVENT_ENDPOINT}/${eventId}`);
    const eventData = response.data;

    return eventData;
  } catch (error) {
    throw error;
  }
};
const signUpForEvent = async (eventId: string) => {
  try {
    // Effectuez une requête HTTP POST pour inscrire l'utilisateur à l'événement
    const response = await api.post(
      `${EVENT_ENDPOINT}/${eventId}/participants`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const EventService = {
  createEvent,
  getEventsByPostalCode,
  getEventById,
  signUpForEvent,
};

export default EventService;
