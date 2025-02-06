// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import AdminDashboard from './components/dashboard/AdminDashboard';
import HODDashboard from './components/dashboard/HODDashboard';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-lra-gray-light">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/login" element={<Login />} />
              
              <Route 
                path="/admin/*" 
                element={
                  <ProtectedRoute role="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/hod/*" 
                element={
                  <ProtectedRoute role="hod">
                    <HODDashboard />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/teacher/*" 
                element={
                  <ProtectedRoute role="teacher">
                    <TeacherDashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;