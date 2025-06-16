import { role } from "@/lib/data";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "🏠",
        label: "Accueil",
        href: "/",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "👨‍🏫",
        label: "Enseignants",
        href: "/liste/enseignants",
        visible: ["admin", "enseignant"],
      },
      {
        icon: "👨‍🎓",
        label: "Étudiants",
        href: "/liste/etudiants",
        visible: ["admin", "enseignant"],
      },
      {
        icon: "👨‍👩‍👧‍👦",
        label: "Parents",
        href: "/liste/parents",
        visible: ["admin", "enseignant"],
      },
      {
        icon: "📚",
        label: "Matières",
        href: "/liste/matieres",
        visible: ["admin"],
      },
      {
        icon: "🏫",
        label: "Classes",
        href: "/liste/classes",
        visible: ["admin", "enseignant"],
      },
      {
        icon: "📖",
        label: "Cours",
        href: "/liste/cours",
        visible: ["admin", "enseignant"],
      },
      {
        icon: "📝",
        label: "Examens",
        href: "/liste/examens",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "📋",
        label: "Devoirs",
        href: "/liste/devoirs",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "🏆",
        label: "Résultats",
        href: "/liste/resultats",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "✅",
        label: "Présences",
        href: "/liste/presences",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "📅",
        label: "Événements",
        href: "/liste/evenements",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "💬",
        label: "Messages",
        href: "/liste/messages",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "📢",
        label: "Annonces",
        href: "/liste/annonces",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
    ],
  },
  {
    title: "AUTRES",
    items: [
      {
        icon: "👤",
        label: "Profil",
        href: "/profil",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "⚙️",
        label: "Paramètres",
        href: "/parametres",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
      {
        icon: "🚪",
        label: "Déconnexion",
        href: "/deconnexion",
        visible: ["admin", "enseignant", "étudiant", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-300 py-2 md:px-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;