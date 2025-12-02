import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
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

                <NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded" }>
                  About
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-gray-900 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded" }>
                  Contact
                </NavLink>
              </div>
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