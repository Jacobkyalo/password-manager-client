import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import SignUp from './pages/signup';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import NewPassword from './pages/add-password';

function App() {
  return (
    <div className="mx-auto w-[1200px] max-w-full px-[6px] no-underline">
      <ToastContainer />
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
