// TEMPORARY DATA

export let role = "admin";

export const teachersData = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "Mamadou Diallo",
    email: "mamadou@edusphere.gn",
    photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "+224 622 123 456",
    subjects: ["Mathématiques", "Géométrie"],
    classes: ["6ème A", "5ème B", "4ème C"],
    address: "Kaloum, Conakry, Guinée",
  },
  {
    id: 2,
    teacherId: "1234567891",
    name: "Fatoumata Camara",
    email: "fatoumata@edusphere.gn",
    photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "+224 622 123 457",
    subjects: ["Français", "Littérature"],
    classes: ["6ème A", "5ème A", "4ème B"],
    address: "Matam, Conakry, Guinée",
  },
  {
    id: 3,
    teacherId: "1234567892",
    name: "Alpha Condé",
    email: "alpha@edusphere.gn",
    photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "+224 622 123 458",
    subjects: ["Histoire", "Géographie"],
    classes: ["5ème A", "4ème B", "3ème C"],
    address: "Dixinn, Conakry, Guinée",
  },
];

export const studentsData = [
  {
    id: 1,
    studentId: "ETU001",
    name: "Amadou Barry",
    email: "amadou.barry@edusphere.gn",
    photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "+224 622 234 567",
    grade: 6,
    class: "6ème A",
    address: "Kaloum, Conakry, Guinée",
  },
  {
    id: 2,
    studentId: "ETU002",
    name: "Aissatou Diallo",
    email: "aissatou.diallo@edusphere.gn",
    photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "+224 622 234 568",
    grade: 5,
    class: "5ème A",
    address: "Matam, Conakry, Guinée",
  },
];

export const parentsData = [
  {
    id: 1,
    name: "Ibrahima Barry",
    students: ["Amadou Barry"],
    email: "ibrahima.barry@gmail.com",
    phone: "+224 622 345 678",
    address: "Kaloum, Conakry, Guinée",
  },
  {
    id: 2,
    name: "Mariama Diallo",
    students: ["Aissatou Diallo"],
    email: "mariama.diallo@gmail.com",
    phone: "+224 622 345 679",
    address: "Matam, Conakry, Guinée",
  },
];

export const subjectsData = [
  {
    id: 1,
    name: "Mathématiques",
    teachers: ["Mamadou Diallo", "Alpha Condé"],
  },
  {
    id: 2,
    name: "Français",
    teachers: ["Fatoumata Camara"],
  },
  {
    id: 3,
    name: "Histoire-Géographie",
    teachers: ["Alpha Condé"],
  },
];

export const classesData = [
  {
    id: 1,
    name: "6ème A",
    capacity: 30,
    grade: 6,
    supervisor: "Mamadou Diallo",
  },
  {
    id: 2,
    name: "5ème A",
    capacity: 28,
    grade: 5,
    supervisor: "Fatoumata Camara",
  },
  {
    id: 3,
    name: "4ème A",
    capacity: 25,
    grade: 4,
    supervisor: "Alpha Condé",
  },
];

export const lessonsData = [
  {
    id: 1,
    subject: "Mathématiques",
    class: "6ème A",
    teacher: "Mamadou Diallo",
  },
  {
    id: 2,
    subject: "Français",
    class: "6ème A",
    teacher: "Fatoumata Camara",
  },
];

export const examsData = [
  {
    id: 1,
    subject: "Mathématiques",
    class: "6ème A",
    teacher: "Mamadou Diallo",
    date: "2025-01-15",
  },
  {
    id: 2,
    subject: "Français",
    class: "5ème A",
    teacher: "Fatoumata Camara",
    date: "2025-01-16",
  },
];

export const assignmentsData = [
  {
    id: 1,
    subject: "Mathématiques",
    class: "6ème A",
    teacher: "Mamadou Diallo",
    dueDate: "2025-01-20",
  },
  {
    id: 2,
    subject: "Français",
    class: "5ème A",
    teacher: "Fatoumata Camara",
    dueDate: "2025-01-21",
  },
];

export const resultsData = [
  {
    id: 1,
    subject: "Mathématiques",
    class: "6ème A",
    teacher: "Mamadou Diallo",
    student: "Amadou Barry",
    date: "2025-01-01",
    type: "examen",
    score: 85,
  },
  {
    id: 2,
    subject: "Français",
    class: "5ème A",
    teacher: "Fatoumata Camara",
    student: "Aissatou Diallo",
    date: "2025-01-01",
    type: "examen",
    score: 92,
  },
];

export const eventsData = [
  {
    id: 1,
    title: "Sortie au Musée National",
    class: "6ème A",
    date: "2025-01-25",
    startTime: "08:00",
    endTime: "16:00",
  },
  {
    id: 2,
    title: "Compétition Sportive",
    class: "5ème A",
    date: "2025-01-30",
    startTime: "14:00",
    endTime: "17:00",
  },
];

export const announcementsData = [
  {
    id: 1,
    title: "Rentrée Scolaire 2024-2025",
    class: "Toutes les classes",
    date: "2024-10-01",
  },
  {
    id: 2,
    title: "Examens du Premier Trimestre",
    class: "Toutes les classes",
    date: "2024-12-15",
  },
];

export const calendarEvents = [
  {
    title: "Mathématiques",
    allDay: false,
    start: new Date(2025, 0, 15, 8, 0),
    end: new Date(2025, 0, 15, 9, 30),
  },
  {
    title: "Français",
    allDay: false,
    start: new Date(2025, 0, 15, 10, 0),
    end: new Date(2025, 0, 15, 11, 30),
  },
];

export { role }