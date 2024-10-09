import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Expenses from './Components/Expenses/Expenses';
import Trips from './Components/Trips/Trips';
import Approvals from './Components/Approvals/Approvals';
import NewExpenseForm from './Components/NewExpenseForm/NewExpenseForm';
import TripForm from './Components/TripForm/TripForm';
import Category from './Components/Category/Category';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const autStatus = localStorage.getItem('isAuthenticated');
    if (autStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        
        {isAuthenticated && (
          <>
            <Route path="/home" element={<Home onLogout={handleLogout} />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="newexpenseform" element={<NewExpenseForm />} />
              <Route path="trips" element={<Trips />} />
              <Route path="tripform" element={<TripForm />} />
              <Route path="approvals" element={<Approvals />} />
              <Route path="category" element={<Category />} />
            </Route>
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
