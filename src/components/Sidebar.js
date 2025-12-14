import React from "react";
import { Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import Logo from "assets/images/logo-main.webp";
import { useRole } from "contexts/RoleContext";
import {
  HomeIcon,
  CourseIcon,
  TutorsIcon,
  ReceiptsIcon,
  SettingsIcon,
  LogoutIcon,
  StudentsIcon,
} from "constants/sidebar_icons";

const Sidebar = ({ isOpen, toggle }) => {
  const { role } = useRole();
  const location = useLocation();
  const currentPath = location.pathname;

  // Student menu items
  const studentMenuItems = [
    { icon: <HomeIcon size={24} />, label: "Home", path: "/dashboard" },
    { icon: <CourseIcon size={24} />, label: "My Courses", path: "/my-courses" },
    { icon: <TutorsIcon size={24} />, label: "My Tutors", path: "/my-tutors" },
    { icon: <Calendar size={18} />, label: "My Calendar", path: "/my-calendar" },
    { icon: <ReceiptsIcon size={20} />, label: "My Receipts", path: "/my-receipts" },
  ];

  // Tutor menu items
  const tutorMenuItems = [
    { icon: <HomeIcon size={24} />, label: "Home", path: "/tutor/dashboard" },
    { icon: <CourseIcon size={24} />, label: "My Courses", path: "/tutor/my-courses" },
    { icon: <StudentsIcon size={24} />, label: "My Students", path: "/tutor/my-students" },
    { icon: <Calendar size={18} />, label: "My Calendar", path: "/tutor/my-calendar" },
  ];

  const menuItems = role === "tutor" ? tutorMenuItems : studentMenuItems;

  const bottomItems = [
    { icon: <SettingsIcon size={22} />, label: "My Settings", path: role === "tutor" ? "/tutor/settings" : "/settings" },
    { icon: <LogoutIcon size={22} />, label: "Log Out", path: "/auth/login" },
  ];

  const isActive = (path) => {
    if (path === "/dashboard" || path === "/tutor/dashboard") {
      return currentPath === "/" || currentPath === "/dashboard" || currentPath === "/tutor/dashboard";
    }
    if (path === "/settings" || path === "/tutor/settings") {
      return currentPath.startsWith("/settings") || currentPath.startsWith("/tutor/settings");
    }
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <>
      {/* Overlay for Mobile */}
      {!isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={toggle}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed md:static z-30 flex flex-col justify-between bg-white border-r border-neutral_stroke_2 h-full transition-all duration-300 ease-in-out",
          isOpen ? "w-[15%] min-w-[15rem]" : "w-[5.5rem]"
        )}
      >
        {/* Top */}
        <div>
          <div className="flex items-center justify-between p-4 relative h-[90px]">
            <Link to={role === "tutor" ? "/tutor/dashboard" : "/dashboard"}>
              <img src={Logo} alt="logo" className="w-[3rem]" />
            </Link>
            <button
              onClick={toggle}
              className="hidden md:flex items-center justify-center bg-light_brand_primary rounded-md p-1 text-brand_secondary absolute right-[-24px] bottom-[10px]"
            >
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V24C40 28.4183 36.4183 32 32 32H8C3.58172 32 0 28.4183 0 24V8Z"
                  fill="#161402"
                />
                <path
                  d="M17.8044 13.1381C18.0648 12.8777 18.0648 12.4556 17.8044 12.1953C17.5441 11.9349 17.122 11.9349 16.8616 12.1953L13.5283 15.5286C13.2679 15.7889 13.2679 16.2111 13.5283 16.4714L16.8616 19.8047C17.122 20.0651 17.5441 20.0651 17.8044 19.8047C18.0648 19.5444 18.0648 19.1223 17.8044 18.8619L14.9425 16L17.8044 13.1381Z"
                  fill="white"
                />
                <path
                  d="M23.1377 12.1953C22.8774 11.9349 22.4553 11.9349 22.1949 12.1953C21.9346 12.4556 21.9346 12.8777 22.1949 13.1381L25.0569 16L22.1949 18.8619C21.9346 19.1223 21.9346 19.5444 22.1949 19.8047C22.4553 20.0651 22.8774 20.0651 23.1377 19.8047L26.4711 16.4714C26.7314 16.2111 26.7314 15.7889 26.4711 15.5286L23.1377 12.1953Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-6">
            <ul className="space-y-5 px-[1rem]">
              {menuItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={clsx(
                        "flex items-center gap-3 px-4 py-3 hover:bg-light_brand_primary rounded-lg transition-colors",
                        active && "bg-brand_primary"
                      )}
                    >
                      <span className="text-brand_secondary basis-[10%] flex justify-center items-center">
                        {item.icon}
                      </span>
                      {isOpen && (
                        <span
                          className={clsx(
                            "font-aileron_r text-14 text-brand_secondary",
                            active && "font-aileron_sb"
                          )}
                        >
                          {item.label}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mb-4">
          <ul className="space-y-1 px-[1rem]">
            {bottomItems.map((item, index) => {
              const active = isActive(item.path);
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3 hover:bg-light_brand_primary rounded-lg transition-colors",
                      active && "bg-brand_primary"
                    )}
                  >
                    <span className="text-brand_secondary basis-[10%] flex justify-center items-center">
                      {item.icon}
                    </span>
                    {isOpen && (
                      <span
                        className={clsx(
                          "font-aileron_r text-14 text-brand_secondary",
                          active && "font-aileron_sb"
                        )}
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
