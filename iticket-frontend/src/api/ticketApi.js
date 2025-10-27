import axios from "axios";

const API_URL = "http://localhost:5000/api/tickets";

export const getTickets = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTicket = async (ticketData) => {
  const res = await axios.post(API_URL, ticketData);
  return res.data;
};
