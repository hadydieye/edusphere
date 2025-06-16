const UserCard = ({ type }: { type: string }) => {
  const cardData = {
    étudiant: {
      count: 1234,
      color: "bg-blue-600",
    },
    enseignant: {
      count: 89,
      color: "bg-green-600",
    },
    parent: {
      count: 567,
      color: "bg-purple-600",
    },
    personnel: {
      count: 45,
      color: "bg-orange-600",
    },
  };

  const data = cardData[type as keyof typeof cardData];

  return (
    <div className="rounded-2xl odd:bg-purple-600 even:bg-blue-600 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <span className="text-white">⋯</span>
      </div>
      <h1 className="text-2xl font-semibold my-4">{data.count}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-200">
        {type}s
      </h2>
    </div>
  );
};

export default UserCard;