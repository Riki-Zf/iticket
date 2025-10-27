export default function TicketList({ tickets, onStatusChange, onDelete }) {
  if (tickets.length === 0) return <div className="text-center text-gray-500 mt-6">Belum ada tiket yang dibuat.</div>;

  const statusOptions = ["Open", "Pending", "Completed"];

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="font-semibold text-lg mb-3">Daftar Tiket</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Judul</th>
              <th className="p-3 border">Kategori</th>
              <th className="p-3 border">Prioritas</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50">
                <td className="p-3 border">{ticket.title}</td>
                <td className="p-3 border">{ticket.category}</td>
                <td className="p-3 border">{ticket.priority}</td>
                <td className="p-3 border">
                  <select
                    value={ticket.status}
                    onChange={(e) => onStatusChange(ticket.id, e.target.value)}
                    className={`p-1 rounded text-sm ${ticket.status === "Open" ? "bg-yellow-100 text-yellow-800" : ticket.status === "Pending" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}
                  >
                    {statusOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3 border text-center">
                  <button onClick={() => onDelete(ticket.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
