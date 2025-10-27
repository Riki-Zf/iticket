import express from "express";
import { getTickets, getTicketById, createTicket, updateTicket, deleteTicket, updateTicketStatus } from "../controllers/ticketController.js";

const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/", createTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

router.route("/").get(getTickets).post(createTicket);

router.route("/:id").put(updateTicketStatus);

export default router;
