import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from '../hooks/useCart';

export default function MainLayout() {
  const { user, logout } = useAuth();
  const { totalQuantity } = useCart();

  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">

              <div className="flex space-x-4">
                <NavLink to="/" end className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"}>
                  Home
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"}>
                  About
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"}>
                  Contact
                </NavLink>

                <NavLink to="/create" className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"}>
                  Create Article
                </NavLink>

                <NavLink to="/filter" className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"}>
                  Filter
                </NavLink>

                <NavLink to="/cart" className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"}>
                  Cart
                  <span className="ml-2 inline-flex items-center justify-center text-xs bg-blue-600 text-white rounded-full w-6 h-6">
                    {totalQuantity}
                  </span>
                </NavLink>

              </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
              {user ? (
                <>
                  <span>Welcome, {user.name}</span>
                  <button onClick={logout} className="text-red-600">
                    Logout
                  </button>
                </>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}