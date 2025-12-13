import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { AdminLogin as adminLoginApi } from "../../utils/adminApis";

const AdminLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await adminLoginApi({ email, password });

      // JWT from API response
      const token  = response.data.data.token.token;
      const expiresIn = response.data.data.token.expiresIn

      // Save token and expiry in session storage
      sessionStorage.setItem("adminToken", token);
      sessionStorage.setItem("adminTokenExpiry", expiresIn);

      navigate("/adminDashboard");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <MainLayout>
    <div className="h-120 flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 border-2 rounded-2xl shadow-2xl p-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-emerald-900">Admin Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center top-6 text-gray-600"
            >
              <FaRegEye size={20} />
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-800 text-white py-2 rounded-md font-medium hover:bg-emerald-700 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    </MainLayout>
  );
};

export default AdminLogin;
