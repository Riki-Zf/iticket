import { useState } from "react";
import { createTicket } from "../api/ticketApi";

export default function TicketForm({ onTicketCreated }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Internet",
    priority: "Low",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTicket(form);
    onTicketCreated();
    setForm({ title: "", description: "", category: "Internet", priority: "Low" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Buat Tiket Baru</h2>
      <input name="title" placeholder="Judul" value={form.title} onChange={handleChange} className="border w-full p-2 mb-2 rounded" required />
      <textarea name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} className="border w-full p-2 mb-2 rounded" />
      <select name="category" value={form.category} onChange={handleChange} className="border w-full p-2 mb-2 rounded">
        <option>Internet</option>
        <option>Aplikasi</option>
        <option>Printer</option>
        <option>Masalah Lainnya</option>
      </select>
      <select name="priority" value={form.priority} onChange={handleChange} className="border w-full p-2 mb-3 rounded">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
