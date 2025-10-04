import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import "./SignUpPage.css"; // Import the CSS file

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signup(formData);
    }
  };

  return (
    <div className="signup-page-container">
      {/* Left Side - Form */}
      <div className="form-section">
        <div className="form-wrapper">
          {/* Logo and Welcome Message */}
          <div className="welcome-header">
            <div className="logo-container">
              <div className="logo-icon-wrapper">
                <MessageSquare className="logo-icon" />
              </div>
              <h1 className="welcome-title">Create Account</h1>
              <p className="welcome-subtitle">Get started with your free account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-control">
              <label className="label">Full Name</label>
              <div className="input-container">
                <div className="input-icon-wrapper">
                  <User className="input-icon" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  className="input-field with-icon"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

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

            <button type="submit" className="submit-btn" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="loader-icon" />
                  <span>Loading...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="login-link-container">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;