import { classesData } from "@/lib/data";

const ClassesListPage = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-white">
          Toutes les Classes
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700">
              <span className="text-white">🔍</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700">
              <span className="text-white">⚙️</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700">
              <span className="text-white">📊</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700">
              <span className="text-white">+</span>
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classesData.map((classItem) => (
            <div key={classItem.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🏫</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{classItem.name}</h3>
                  <p className="text-sm text-gray-400">
                    Niveau {classItem.grade}ème
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-300">
                  <strong>Capacité:</strong> {classItem.capacity} étudiants
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Superviseur:</strong> {classItem.supervisor}
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">
                  Voir
                </button>
                <button className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                  Modifier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesListPage;