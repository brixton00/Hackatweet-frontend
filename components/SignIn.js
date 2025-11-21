import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

export default function SignIn({ onClose }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: username, token: data.token }));
          onClose();
        } else {
          setError(data.error);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-black rounded-2xl w-full max-w-md p-8 relative shadow-2xl border border-gray-800 flex flex-col gap-6">
        <button
          className="absolute top-4 left-4 text-white hover:text-red-600 hover:bg-slate-300 hover:scale-125 rounded-full px-2 transition"
          onClick={onClose}
        >
          <span className="text-xl font-bold">&times;</span>
        </button>

        <div className="flex justify-center">
          <img
            src="/images/logo.jpg"
            alt="Twitter Logo"
            className="h-8 w-auto"
          />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Connect to Hackatweet
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded p-3 text-lg focus:outline-none focus:border-[#1D9BF0] focus:ring-1 focus:ring-[#1D9BF0] placeholder-gray-500 text-white"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded p-3 text-lg focus:outline-none focus:border-[#1D9BF0] focus:ring-1 focus:ring-[#1D9BF0] placeholder-gray-500 text-white"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            className="w-full bg-[#1D9BF0] text-white rounded-full py-3 mt-4 font-bold text-lg hover:bg-[#1a8cd8] transition duration-200 cursor-pointer"
            type="button"
            onClick={() => handleConnection()}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
