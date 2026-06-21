import {
  useEffect,
  useState,
} from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import DashboardLayout
from "../components/layout/DashboardLayout";

import {
  getStats,
} from "../services/adminService";

function AdminDashboard() {

  const [stats, setStats] =
    useState({});

    const overviewData = [
  {
    name: "Courses",
    value:
      stats.totalCourses || 0,
  },
  {
    name: "Enrollments",
    value:
      stats.totalEnrollments || 0,
  },
  {
    name: "Students",
    value:
      stats.totalStudents || 0,
  },
];

const completionData = [
  {
    name: "Completed",
    value:
      stats.averageCompletion || 0,
  },
  {
    name: "Remaining",
    value:
      100 -
      (stats.averageCompletion || 0),
  },
];

const COLORS = [
  "#6366F1",
  "#A855F7",
];

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats =
    async () => {
      try {

        const response =
          await getStats();

        setStats(
          response.data
        );

      } catch (error) {
        console.log(error);
      }
    };

    
  return (
    <DashboardLayout>
      <div className="
        min-h-screen
        bg-slate-100
        dark:bg-slate-950
        p-8
      ">
        <h1 className="
          text-4xl
          font-bold
          mb-8
          dark:text-white
        ">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
    <h3 className="text-gray-500">Students</h3>
    <p className="text-4xl font-bold text-indigo-600">
      {stats.totalStudents || 0}
    </p>
  </div>

  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
    <h3 className="text-gray-500">Courses</h3>
    <p className="text-4xl font-bold text-green-600">
      {stats.totalCourses || 0}
    </p>
  </div>

  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
    <h3 className="text-gray-500">Enrollments</h3>
    <p className="text-4xl font-bold text-purple-600">
      {stats.totalEnrollments || 0}
    </p>
  </div>

  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
    <h3 className="text-gray-500">Completion</h3>
    <p className="text-4xl font-bold text-orange-600">
      {stats.averageCompletion || 0}%
    </p>
  </div>
</div>
<div className="grid lg:grid-cols-2 gap-8 mt-10">

  {/* Bar Chart */}

  <div
    className="
      bg-white
      dark:bg-slate-800
      p-6
      rounded-xl
      shadow
    "
  >
    <h2
      className="
        text-xl
        font-bold
        mb-4
        dark:text-white
      "
    >
      Platform Overview
    </h2>

    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart
        data={overviewData}
      >
        <XAxis
          dataKey="name"
        />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="value"
          fill="#6366F1"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Pie Chart */}

  <div
    className="
      bg-white
      dark:bg-slate-800
      p-6
      rounded-xl
      shadow
    "
  >
    <h2
      className="
        text-xl
        font-bold
        mb-4
        dark:text-white
      "
    >
      Completion Rate
    </h2>

    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <PieChart>

        <Pie
          data={completionData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {completionData.map(
            (
              entry,
              index
            ) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index
                  ]
                }
              />
            )
          )}
        </Pie>

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  </div>

</div>

      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;