import { Routes, Route, NavLink } from "react-router-dom";
import Products from "./Pages/Products";
import Galeryy from "./Pages/Galeryy";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-normal items-center">
          <NavLink
            to="/Products"
            className="text-white hover:bg-blue-400 px-4 py-2 rounded"
            activeClassName="bg-blue-700"
          >
            Products
          </NavLink>
          <NavLink
            to="/Galeryy"
            className="text-white hover:bg-blue-400 px-4 py-2 rounded"
            activeClassName="bg-blue-700"
          >
            Galeryy
          </NavLink>
        </div>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/Products" element={<Products />} />
          <Route path="/Galeryy" element={<Galeryy />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
