const AttendanceListPage = () => {
  const attendanceData = [
    {
      id: 1,
      student: "Amadou Barry",
      class: "6ème A",
      date: "2025-01-15",
      status: "Présent",
      subject: "Mathématiques",
    },
    {
      id: 2,
      student: "Aissatou Diallo",
      class: "5ème A",
      date: "2025-01-15",
      status: "Absent",
      subject: "Français",
    },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-white">
          Toutes les Présences
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
          {attendanceData.map((attendance) => (
            <div key={attendance.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  attendance.status === 'Présent' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  <span className="text-white text-2xl">
                    {attendance.status === 'Présent' ? '✅' : '❌'}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{attendance.student}</h3>
                  <p className="text-sm text-gray-400">Classe {attendance.class}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-300">
                  <strong>Matière:</strong> {attendance.subject}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Date:</strong> {new Date(attendance.date).toLocaleDateString('fr-FR')}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Statut:</strong> 
                  <span className={`ml-1 font-bold ${
                    attendance.status === 'Présent' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {attendance.status}
                  </span>
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <button className={`px-3 py-1 text-white rounded text-sm ${
                  attendance.status === 'Présent' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-red-600 hover:bg-red-700'
                }`}>
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

export default AttendanceListPage;