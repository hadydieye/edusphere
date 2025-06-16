const Announcements = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">Annonces</h1>
        <span className="text-gray-400 text-sm">Voir tout</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-blue-600 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Rentrée Scolaire 2024-2025</h2>
            <span className="text-xs text-gray-200 bg-white/20 rounded-md px-1 py-1">
              2024-09-15
            </span>
          </div>
          <p className="text-sm text-gray-200 mt-1">
            La rentrée scolaire aura lieu le 1er octobre 2024. Tous les étudiants doivent être présents.
          </p>
        </div>
        <div className="bg-purple-600 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Examens du Premier Trimestre</h2>
            <span className="text-xs text-gray-200 bg-white/20 rounded-md px-1 py-1">
              2024-12-01
            </span>
          </div>
          <p className="text-sm text-gray-200 mt-1">
            Les examens du premier trimestre commenceront le 15 décembre 2024.
          </p>
        </div>
        <div className="bg-green-600 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Fête de l'Indépendance</h2>
            <span className="text-xs text-gray-200 bg-white/20 rounded-md px-1 py-1">
              2024-10-02
            </span>
          </div>
          <p className="text-sm text-gray-200 mt-1">
            Célébration de l'indépendance de la Guinée. Pas de cours le 2 octobre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;