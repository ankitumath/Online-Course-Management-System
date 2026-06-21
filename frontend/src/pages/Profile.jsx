import { useAuth } from "../context/AuthContext";
import DashboardLayout from "../components/layout/DashboardLayout";

function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-8 transition-colors duration-300">
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
          
          <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            My Profile
          </h1>

          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            
            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-700">
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Name:
                </strong>{" "}
                {user?.name}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-700">
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Email:
                </strong>{" "}
                {user?.email}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-700">
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Role:
                </strong>{" "}
                {user?.role}
              </p>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Profile;