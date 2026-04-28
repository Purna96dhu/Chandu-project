type Props = {
  toggleSidebar: () => void;
  setCategory: (cat: string) => void;
};

function CategoriesBar({ toggleSidebar, setCategory }: Props) {
  const menu = {
    Sports: ["Cricket Bats", "Cricket Balls", "Stumps"],
    Fashion: ["Men", "Women", "Kids"],
    Home: ["Furniture", "Decor", "Kitchen"],
  };

  return (
    <div className="bg-white shadow px-4 py-2 flex items-center gap-6">

      {/* Menu button */}
      <button onClick={toggleSidebar} className="text-xl">
        ☰
      </button>

      {/* Categories */}
      {Object.keys(menu).map((cat) => (
        <div key={cat} className="relative group cursor-pointer py-2">

          {/* Main category */}
          <span className="hover:text-blue-600">{cat}</span>

          {/* Dropdown */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md p-3 z-50">
            {menu[cat as keyof typeof menu].map((sub) => (
              <div
                key={sub}
                onClick={() => setCategory(sub)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                {sub}
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default CategoriesBar;