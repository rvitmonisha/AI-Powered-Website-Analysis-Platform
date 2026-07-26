function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Website Intelligence
        </h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">History</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;