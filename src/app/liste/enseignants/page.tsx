import Link from "next/link";
import { teachersData } from "@/lib/data";

const TeachersListPage = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-white">
          Tous les Enseignants
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
          {teachersData.map((teacher) => (
            <div key={teacher.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {teacher.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{teacher.name}</h3>
                  <p className="text-sm text-gray-400">{teacher.email}</p>
                  <p className="text-sm text-gray-400">{teacher.phone}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-300">
                  <strong>Matières:</strong> {teacher.subjects.join(", ")}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Classes:</strong> {teacher.classes.join(", ")}
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/enseignants/${teacher.id}`}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                >
                  Voir
                </Link>
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

export default TeachersListPage;