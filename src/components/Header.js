import React from "react";
import { Menu } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { useRole } from "contexts/RoleContext";

const Header = ({ toggleSidebar }) => {
  const { role } = useRole();

  // Student welcome message
  const studentWelcome = {
    title: "Welcome Ariana Wilson! 👋🏼",
    subtitle: "We've got some updates for you.",
  };

  // Tutor welcome message
  const tutorWelcome = {
    title: "Welcome, Lugar Lynx! 👋",
    subtitle: "Let's make learning impactful 😊",
  };

  const welcome = role === "tutor" ? tutorWelcome : studentWelcome;

  return (
    <header className="flex justify-between items-center bg-white border-b border-neutral_stroke_2 px-[1rem] h-[90px] md:px-[4rem]">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-brand_secondary focus:outline-none"
      >
        <Menu size={24} />
      </button>

      {/* Welcome */}
      <div className="flex flex-col">
        <h2 className="text-22 font-albra_sans_b text-brand_secondary">
          {welcome.title}
        </h2>
        <p className="text-14 font-aileron_r text-border_stroke_2 leading-4">
          {welcome.subtitle}
        </p>
      </div>

      {/* User Info */}
      <ProfileDropdown />
    </header>
  );
};

export default Header;
