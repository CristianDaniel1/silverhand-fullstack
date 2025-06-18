import { Outlet } from 'react-router';
import { AdminFooter } from '../components/admin/AdminFooter';
import { AdminHeader } from '../components/admin/AdminHeader';
import { Sidebar } from '../components/admin/Sidebar';
import { ScrollToTop } from '../components/ScrollToTop';

const LayoutAdmin = () => {
  return (
    <>
      <AdminHeader /> <ScrollToTop />
      <main className="bg-slate-50 py-20">
        <div className="mt-14 flex justify-center gap-14 min-h-screen bg-white max-container shadow rounded-md">
          <div className="grid grid-cols-10 w-full pb-14">
            <div className="col-span-2 relative">
              <Sidebar />
            </div>
            <div className="col-span-8">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <AdminFooter />
    </>
  );
};

export default LayoutAdmin;
