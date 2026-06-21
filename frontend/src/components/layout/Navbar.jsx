function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Online LMS
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>Courses</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;