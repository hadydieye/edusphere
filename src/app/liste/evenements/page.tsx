import { eventsData } from "@/lib/data";

const EventsListPage = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-white">
          Tous les Événements
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
          {eventsData.map((event) => (
            <div key={event.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📅</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{event.title}</h3>
                  <p className="text-sm text-gray-400">Classe {event.class}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-300">
                  <strong>Date:</strong> {new Date(event.date).toLocaleDateString('fr-FR')}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Horaire:</strong> {event.startTime} - {event.endTime}
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
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

export default EventsListPage;