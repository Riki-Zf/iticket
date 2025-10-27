import Ticket from "../models/Ticket.js";

// Get all tickets (with optional query for status, priority)
export const getTickets = async (req, res, next) => {
  try {
    const { status, priority } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const tickets = await Ticket.find(filter).sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (err) {
    next(err);
  }
};

export const getTicketById = async (req, res, next) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json(ticket);
  } catch (err) {
    next(err);
  }
};

export const createTicket = async (req, res, next) => {
  try {
    const { title, description, category, priority } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const ticket = new Ticket({ title, description, category, priority });
    const saved = await ticket.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

export const updateTicket = async (req, res, next) => {
  try {
    const updated = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteTicket = async (req, res, next) => {
  try {
    const deleted = await Ticket.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json({ message: "Ticket deleted" });
  } catch (err) {
    next(err);
  }
};

// UPDATE status tiket
export const updateTicketStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatus = ["Open", "Pending", "Completed"];
  if (!validStatus.includes(status)) {
    return res.status(400).json({ message: "Status tidak valid" });
  }

  const ticket = await Ticket.findByIdAndUpdate(id, { status }, { new: true });
  if (!ticket) return res.status(404).json({ message: "Tiket tidak ditemukan" });

  res.json(ticket);
};
