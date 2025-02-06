// frontend/src/components/layout/Navbar.jsx
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-lra-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="text-white p-2 rounded-md hover:bg-lra-blue-dark"
            >
              <Menu className="h-6 w-6" />
            </button>
            <img 
              src="/logo.png" 
              alt="School Logo" 
              className="h-8 ml-4"
            />
          </div>

          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-white">{user.username}</span>
              <button 
                onClick={handleLogout}
                className="btn btn-secondary"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;