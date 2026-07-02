import Navbar from './Navbar';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">

      <Navbar />

      <main className="pt-20 flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default Layout;
