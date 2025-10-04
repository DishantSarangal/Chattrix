import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <Link to="/" className="logo-link">
              <div className="logo-icon-wrapper">
                <MessageSquare className="logo-icon" />
              </div>
              <h1 className="logo-text">Chatty</h1>
            </Link>
          </div>

          <div className="navbar-right">
            <Link to={"/settings"} className="nav-button">
              <Settings className="nav-icon small" />
              <span className="nav-text">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className="nav-button">
                  <User className="nav-icon" />
                  <span className="nav-text">Profile</span>
                </Link>

                <button className="nav-button" onClick={logout}>
                  <LogOut className="nav-icon" />
                  <span className="nav-text">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;