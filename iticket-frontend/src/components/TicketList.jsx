import axios from "axios";
import { useState } from "react";

export default function TicketList({ tickets, onStatusUpdated }) {
  const [updating, setUpdating] = useState(null);

  const handleStatusChange = async (id, newStatus) => {
    setUpdating(id);
    await axios.put(`http://localhost:5000/api/tickets/${id}`, { status: newStatus });
    setUpdating(null);
    onStatusUpdated(); // refresh data di dashboard
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Daftar Tiket</h2>
      {tickets.length === 0 ? (
        <p className="text-gray-500">Belum ada tiket.</p>
      ) : (
        <ul className="space-y-3">
          {tickets.map((t) => (
            <li key={t._id} className="bg-white border rounded p-4 shadow-sm">
              <h3 className="font-bold text-blue-700">{t.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{t.description}</p>
              <p className="text-sm">Kategori: {t.category}</p>
              <p className="text-sm mb-2">Prioritas: {t.priority}</p>
              <label className="text-sm mr-2 font-medium">Status:</label>
              <select value={t.status} onChange={(e) => handleStatusChange(t._id, e.target.value)} disabled={updating === t._id} className="border rounded p-1">
                <option>Open</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
