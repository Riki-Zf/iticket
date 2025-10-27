import { useEffect, useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import ReportSection from "./components/ReportSection";
import logo from "../src/assets/logotruba.png";

export default function App() {
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("tickets");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = (ticket) => {
    setTickets([...tickets, { ...ticket, id: Date.now(), status: "Open", createdAt: new Date() }]);
  };

  const updateStatus = (id, newStatus) => {
    setTickets(tickets.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex items-center gap-3 mb-6">
        <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide">IT Support Ticket</h1>
      </header>

      <TicketForm onAdd={addTicket} />
      <TicketList tickets={tickets} onStatusChange={updateStatus} onDelete={deleteTicket} />
      <ReportSection tickets={tickets} />
    </div>
  );
}
