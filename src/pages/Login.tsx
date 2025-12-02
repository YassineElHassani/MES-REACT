import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/";

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    login(username);
    navigate(from, { replace: true });
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
