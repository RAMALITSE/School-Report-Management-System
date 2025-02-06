// frontend/src/components/layout/Sidebar.jsx
import { X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const getMenuItems = () => {
    switch (user?.role) {
      case 'admin':
        return [
          { path: '/admin/dashboard', label: 'Dashboard' },
          { path: '/admin/teachers', label: 'Manage Teachers' },
          { path: '/admin/departments', label: 'Departments' },
          { path: '/admin/reports', label: 'Reports' },
        ];
      case 'hod':
        return [
          { path: '/hod/dashboard', label: 'Dashboard' },
          { path: '/hod/teachers', label: 'Department Teachers' },
          { path: '/hod/assignments', label: 'Class Assignments' },
        ];
      case 'teacher':
        return [
          { path: '/teacher/dashboard', label: 'Dashboard' },
          { path: '/teacher/marks', label: 'Enter Marks' },
          { path: '/teacher/classes', label: 'My Classes' },
        ];
      default:
        return [];
    }
  };

  return (
    <div 
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-white shadow-lg transition-transform duration-200 ease-in-out z-20`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-lra-blue">Menu</h2>
          <button 
            onClick={onClose}
            className="text-lra-gray-dark hover:text-lra-blue"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav>
          <ul className="space-y-2">
            {getMenuItems().map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-2 rounded-md ${
                    location.pathname === item.path
                      ? 'bg-lra-blue text-white'
                      : 'text-lra-gray-dark hover:bg-lra-gray-light'
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;