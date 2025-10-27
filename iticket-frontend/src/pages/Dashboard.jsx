import { useEffect, useState } from "react";
import { getTickets } from "../api/ticketApi";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import ReportSection from "../components/ReportSection";
import Header from "../components/Header";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  const loadTickets = async () => {
    const data = await getTickets();
    setTickets(data);
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <Header />
      <TicketForm onTicketCreated={loadTickets} />
      <TicketList tickets={tickets} onStatusUpdated={loadTickets} />
      <ReportSection tickets={tickets} />
    </div>
  );
}
