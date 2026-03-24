import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex gap-6 justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}