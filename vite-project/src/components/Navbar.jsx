import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="w-full h-[45px] relative flex items-center bg-gray-800">
      {/* GG at the extreme left */}
      <p id="Hi" className="absolute left-4 text-white font-bold">GG Notes Saver</p>

      {/* Centered navigation links */}
      <div className="w-full flex justify-center gap-x-5">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-xl"
                : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
