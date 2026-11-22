import {
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiHome,
  FiList,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

const menuItems = [
  { path: "/", label: "Home", icon: FiHome },
  { path: "/about", label: "About me", icon: FiUser },
  { path: "/eduexp", label: "Education and experience", icon: FiBookOpen },
  { path: "/spec", label: "Specializations", icon: FiList },
  { path: "/projects", label: "Projects", icon: FiBriefcase },
  { path: "/skills", label: "Skills", icon: FiCode },
  { path: "/contactme", label: "Contact me", icon: FiMessageSquare },
];

export default function SideMenu() {
  const activePath = window.location.pathname;

  return (
    <nav className="side-menu" aria-label="Main navigation">
      {menuItems.map((item) => {
        const isActive = activePath === item.path;
        const Icon = item.icon;
        return (
          <a
            key={item.path}
            className={`menu-link${isActive ? " active" : ""}`}
            href={item.path}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            title={item.label}
          >
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}
