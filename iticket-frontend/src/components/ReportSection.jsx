export default function ReportSection({ tickets }) {
  if (tickets.length === 0) return null;

  const total = tickets.length;
  const countStatus = (s) => tickets.filter((t) => t.status === s).length;
  const countCategory = (c) => tickets.filter((t) => t.category === c).length;

  // 🕒 Tambahkan tanggal dan waktu realtime
  const date = new Date().toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const textReport = `
📊 Laporan Tiket IT Support
Tanggal: ${date}

Total Tiket: ${total}
Open: ${countStatus("Open")} | Pending: ${countStatus("Pending")} | Completed: ${countStatus("Completed")}

Kategori:
- Internet: ${countCategory("Internet")}
- Aplikasi: ${countCategory("Aplikasi")}
- Printer: ${countCategory("Printer")}
- Masalah Lainnya: ${countCategory("Masalah Lainnya")}
  `.trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textReport);
    alert("Laporan disalin ke clipboard ✅");
  };

  return (
    <div className="bg-white p-4 mt-6 rounded shadow">
      <h2 className="font-semibold text-lg mb-2">Laporan Tiket</h2>
      <pre className="bg-gray-50 p-3 rounded border text-sm whitespace-pre-wrap">{textReport}</pre>
      <button onClick={handleCopy} className="bg-green-600 text-white px-4 py-2 mt-2 rounded">
        Salin Laporan ke Clipboard
      </button>
    </div>
  );
}
