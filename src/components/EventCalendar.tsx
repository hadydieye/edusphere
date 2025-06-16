"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Examen de Mathématiques",
    time: "10:00 - 12:00",
    description: "Examen final de mathématiques pour la classe 6ème A",
  },
  {
    id: 2,
    title: "Réunion Parents-Enseignants",
    time: "14:00 - 16:00",
    description: "Réunion trimestrielle avec les parents",
  },
  {
    id: 3,
    title: "Sortie Éducative",
    time: "08:00 - 17:00",
    description: "Visite du Musée National de Conakry",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <Calendar
        onChange={onChange}
        value={value}
        className="react-calendar-dark"
      />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4 text-white">Événements</h1>
        <span className="text-gray-400 text-sm">Voir tout</span>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-600 border-t-4 odd:border-t-blue-500 even:border-t-purple-500"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-200">{event.title}</h1>
              <span className="text-gray-400 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;