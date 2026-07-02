import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
