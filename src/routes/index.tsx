import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';

const MyWorkRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="login" element={<div>Login page</div>} />
      <Route path="tasks" element={<div>tasks</div>} />
      <Route path="about" element={<div>About us</div>} />
    </Routes>
  );
};

export default MyWorkRoutes;
