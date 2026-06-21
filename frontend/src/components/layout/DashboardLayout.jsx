import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;