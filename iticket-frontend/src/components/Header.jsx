export default function Header({ onNewTicket }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div>
        <h1 className="text-xl font-bold text-blue-800">Support Tickets</h1>
        <p className="text-sm text-gray-500">Manage and track IT support requests</p>
      </div>
    </header>
  );
}
