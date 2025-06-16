import { announcementsData } from "@/lib/data";

const AnnouncementsListPage = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-white">
          Toutes les Annonces
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
        <div className="space-y-4">
          {announcementsData.map((announcement) => (
            <div key={announcement.id} className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">📢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{announcement.title}</h3>
                    <p className="text-sm text-gray-400">Classe: {announcement.class}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">
                    {new Date(announcement.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
                  Voir
                </button>
                <button className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                  Modifier
                </button>
                <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsListPage;