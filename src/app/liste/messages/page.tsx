const MessagesListPage = () => {
  const messagesData = [
    {
      id: 1,
      from: "Mamadou Diallo",
      to: "Fatoumata Camara",
      subject: "Réunion pédagogique",
      message: "Bonjour, pouvons-nous programmer une réunion pour discuter du programme de mathématiques?",
      date: "2025-01-15",
      read: false,
    },
    {
      id: 2,
      from: "Alpha Condé",
      to: "Administration",
      subject: "Demande de matériel",
      message: "J'aurais besoin de nouveaux manuels d'histoire pour mes classes.",
      date: "2025-01-14",
      read: true,
    },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-white">
          Tous les Messages
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
          {messagesData.map((message) => (
            <div key={message.id} className={`bg-gray-800 p-4 rounded-lg border-l-4 ${
              message.read ? 'border-gray-600' : 'border-blue-500'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{message.subject}</h3>
                    <p className="text-sm text-gray-400">De: {message.from} → À: {message.to}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">
                    {new Date(message.date).toLocaleDateString('fr-FR')}
                  </p>
                  {!message.read && (
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4">{message.message}</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                  Répondre
                </button>
                <button className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                  Marquer comme lu
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

export default MessagesListPage;