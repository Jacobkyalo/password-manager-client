import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import SignUp from './pages/signup';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import NewPassword from './pages/add-password';

function App() {
  return (
    <div className="px-[10px]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-password" element={<NewPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
