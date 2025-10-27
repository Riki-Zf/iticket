import { useState } from "react";

export default function TicketForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Internet",
    priority: "Low",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Judul tiket wajib diisi");
    onAdd(form);
    setForm({ title: "", description: "", category: "Internet", priority: "Low" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 grid gap-3">
      <h2 className="font-semibold text-lg">Buat Tiket Baru</h2>

      <input name="title" value={form.title} onChange={handleChange} placeholder="Judul tiket" className="border rounded p-2" />

      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi masalah" className="border rounded p-2" />

      <div className="flex flex-wrap gap-3">
        <select name="category" value={form.category} onChange={handleChange} className="border rounded p-2">
          <option>Internet</option>
          <option>Aplikasi</option>
          <option>Printer</option>
          <option>Masalah Lainnya</option>
        </select>

        <select name="priority" value={form.priority} onChange={handleChange} className="border rounded p-2">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Tambah Tiket
        </button>
      </div>
    </form>
  );
}
