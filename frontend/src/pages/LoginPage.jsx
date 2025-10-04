import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import "./LoginPage.css"; // Import the CSS file

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page-container">
      {/* Left Side - Form */}
      <div className="form-section">
        <div className="form-wrapper">
          {/* Logo and Welcome Message */}
          <div className="welcome-header">
            <div className="logo-container">
              <div className="logo-icon-wrapper">
                <MessageSquare className="logo-icon" />
              </div>
              <h1 className="welcome-title">Welcome Back</h1>
              <p className="welcome-subtitle">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-control">
              <label className="label">Email</label>
              <div className="input-container">
                <div className="input-icon-wrapper">
                  <Mail className="input-icon" />
                </div>
                <input
                  type="email"
                  name="email"
                  className="input-field with-icon"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <div className="input-container">
                <div className="input-icon-wrapper">
                  <Lock className="input-icon" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input-field with-icon"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="input-icon" />
                  ) : (
                    <Eye className="input-icon" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="loader-icon" />
                  <span>Loading...</span>
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="signup-link-container">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="signup-link">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />
    </div>
  );
};

export default LoginPage;