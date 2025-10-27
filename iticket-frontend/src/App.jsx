import Dashboard from "./pages/Dashboard";
import logo from "../src/assets/logotruba.png";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-100 px-6 py-3 shadow-sm flex items-center gap-3">
        <img src={logo} alt="Truba Logo" className="w-16 h-auto object-contain" />
        <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">IT Support</h1>
      </header>

      <Dashboard />
    </div>
  );
}
