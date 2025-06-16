const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-600 px-2 bg-gray-700">
        <span className="text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-[200px] p-2 bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-gray-700 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
          <span>💬</span>
        </div>
        <div className="bg-gray-700 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors relative">
          <span>📢</span>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium text-gray-300">
            Mamadou Diallo
          </span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">MD</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;