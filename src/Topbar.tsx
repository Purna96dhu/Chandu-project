function Topbar() {
  return (
    <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">

      <h1 className="text-xl font-bold">MyApp</h1>

      {/* Search */}
      <div className="flex-1 mx-6 hidden md:block">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 rounded text-black bg-white"
        />
      </div>

      {/* Sign In */}
      <button className="bg-white text-blue-600 px-4 py-1 rounded">
        Sign In
      </button>
    </div>
  );
}

export default Topbar;