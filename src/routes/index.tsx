import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Signin from '../pages/login/SignIn';
import Signup from '../pages/login/Signup';
import { ForgotPassword } from '../pages/login/ForgotPassword';

const MyWorkRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="tasks" element={<div>tasks</div>} />
      <Route path="about" element={<div>About us</div>} />
    </Routes>
  );
};

export default MyWorkRoutes;
