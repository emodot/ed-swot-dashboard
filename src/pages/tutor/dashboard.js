import React, { useState } from "react";
import QuickActions from "components/Inputs/QuickActions";
import SearchInput from "components/Inputs/SearchInput";
import Table from "components/Table";
import { MessageCircle, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { TotalStudentsIcon, TotalCoursesIcon } from "constants/dashboard_icons";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";
import { NewTutorIcon, TotalTutoringSessionIcon } from "constants/quick_actions_icons";

const TutorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState("All");

  const quickActions = [
    {
      label: "Add new lesson",
      icon: <NewTutorIcon size={20} />,
      bg: "bg-[#E5F2FF]",
      border: "border border-[#2196F3]",
      hover: "hover:bg-[#E5F2FF]",
      onClick: () => console.log("Add new lesson"),
    },
    {
      label: "Message student",
      icon: <MessageCircle size={18} />,
      bg: "bg-[#FFEFE5]",
      border: "border border-[#F5853F]",
      hover: "hover:bg-orange-50",
      onClick: () => console.log("Message student"),
    },
  ];

  const stats = [
    {
      label: "Total Students",
      value: 105,
      icon: <TotalStudentsIcon size={50} />,
      border: "border-error",
    },
    {
      label: "Tutoring Courses",
      value: 2,
      icon: <TotalCoursesIcon size={50} />,
      border: "border-warning",
    },
    {
      label: "Total Tutoring Sessions",
      value: 45,
      icon: <TotalTutoringSessionIcon size={50} />,
      border: "border-[#2196F3]",
    },
  ];

  const activities = [
    {
      img: TutorAvatar,
      message: "Gael Harry just joined Graphic Design Course",
      time: "12 Sept, 2025; 12:00PM",
    },
    {
      message: "Your payment for Igbo Language Course could not be processed.",
      time: "12 Sept, 2025; 12:00PM",
    },
    {
      message: "You've successfully enrolled in Aeronautics Course. 😉",
      time: "12 Sept, 2025; 12:00PM",
    },
    {
      message: "Reminder: You have a fitting with David Ekene at 1:30 PM today.",
      time: "12 Sept, 2025; 12:00PM",
    },
    {
      message: "A classmate replied to your discussion post",
      time: "12 Sept, 2025; 12:00PM",
    },
    {
      message: "Your Coding Course starts tomorrow. Get ready 💪",
      icon: "E=mc²",
      time: "12 Sept, 2025; 12:00PM",
    },
  ];

  const calendarEvents = [
    {
      title: "Graphic Design Class",
      time: "Today • 10:30am - 12:00pm",
      link: "Google Meet",
    },
    {
      title: "One-On-One Class With Justine Graham",
      time: "Today • 10:30am - 12:00pm",
      link: "Google Meet",
    },
    {
      title: "Graphic Design Class",
      time: "Today • 10:30am - 12:00pm",
      link: "Google Meet",
    },
  ];

  const students = [
    {
      id: 1,
      name: "John Doe",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "01/09/2025",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: TutorAvatar,
      course: "Computer Fundamentals",
      dateJoined: "05/09/2025",
    },
  ];

  return (
    <section className="p-4 md:p-6">
      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-14 font-aileron_r text-brand_secondary mb-4">
          Quick actions
        </h2>
        <QuickActions actions={quickActions} />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 border ${stat.border} rounded-[12px] p-4 bg-white`}
          >
            <div className="p-2 rounded-md text-dark_brand_primary">
              {stat.icon}
            </div>
            <div>
              <h4 className="text-24 font-aileron_m text-brand_secondary">
                {stat.value}
              </h4>
              <p className="text-14 text-border_stroke_2">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activities and Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Activities Section */}
        <div className="bg-white border border-neutral_stroke_2 rounded-2xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-20 font-albra_sans_sb text-brand_secondary">
              Activities
            </h2>
            <select className="text-14 font-aileron_sb text-brand_secondary border border-neutral_stroke_2 rounded-lg px-3 py-1 bg-white focus:outline-none">
              <option>Sort by Newest</option>
              <option>Sort by Oldest</option>
            </select>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 border-b border-neutral_stroke_2 pb-3 last:border-none"
              >
                {activity.img && (
                  <img
                    src={activity.img}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                {activity.icon && (
                  <div className="w-8 h-8 rounded-full bg-light_brand_primary flex items-center justify-center text-12 font-aileron_sb text-brand_secondary">
                    {activity.icon}
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-brand_secondary text-14 font-aileron_sb leading-snug">
                    {activity.message}
                  </p>
                  <p className="text-10 text-border_stroke_2 mt-1 font-aileron_r">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white border border-neutral_stroke_2 rounded-2xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-20 font-albra_sans_sb text-brand_secondary">
              Calendar
            </h2>
            <select className="text-14 font-aileron_sb text-brand_secondary border border-neutral_stroke_2 rounded-lg px-3 py-1 bg-white focus:outline-none">
              <option>Sept</option>
              <option>Oct</option>
              <option>Nov</option>
            </select>
          </div>

          {/* Date Picker */}
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-neutral_disabled rounded-full transition-colors">
              <ChevronLeft size={20} className="text-brand_secondary" />
            </button>
            <div className="flex gap-2">
              {[7, 8, 9, 10, 11].map((day) => (
                <div
                  key={day}
                  className={`px-3 py-2 rounded-lg text-14 font-aileron_sb ${
                    day === 9
                      ? "bg-brand_primary text-white"
                      : "text-brand_secondary hover:bg-neutral_disabled"
                  } cursor-pointer transition-colors`}
                >
                  {day} Sun
                </div>
              ))}
            </div>
            <button className="p-2 hover:bg-neutral_disabled rounded-full transition-colors">
              <ChevronRight size={20} className="text-brand_secondary" />
            </button>
          </div>

          {/* Events */}
          <div className="space-y-3">
            {calendarEvents.map((event, index) => (
              <div
                key={index}
                className="border border-neutral_stroke_2 rounded-lg p-3"
              >
                <h3 className="text-14 font-aileron_sb text-brand_secondary mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-12 font-aileron_r text-border_stroke_2">
                    {event.time}
                  </p>
                  <a
                    href="#"
                    className="text-12 font-aileron_sb text-brand_primary flex items-center gap-1 hover:opacity-80"
                  >
                    {event.link}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Students Section */}
      <div>
        <h2 className="text-20 font-aileron_sb text-brand_secondary mb-6">
          Students
        </h2>

        {/* Filter Bar */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <label className="text-14 font-aileron_r text-brand_secondary whitespace-nowrap">
              Filter
            </label>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center flex-1">
              <div className="flex items-center gap-2">
                <label className="text-[14px] font-aileron_r capitalize">
                  Date:
                </label>
                <select
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
                >
                  <option>All</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                </select>
              </div>
              <div className="w-full md:flex-1 md:max-w-[300px]">
                <SearchInput
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <Table
          columns={[
            { header: "Students" },
            { header: "Courses" },
            { header: "Date Joined" },
            { header: "Actions" },
          ]}
          data={students}
          renderRow={(student) => (
            <>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-14 font-aileron_sb text-brand_secondary">
                    {student.name}
                  </p>
                </div>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-12 font-aileron_sb text-[#E53935] bg-[#FFEDEB]">
                  {student.course}
                </span>
              </td>
              <td className="p-4">
                <p className="text-14 font-aileron_r text-brand_secondary">
                  {student.dateJoined}
                </p>
              </td>
              <td className="p-4">
                <button className="text-14 font-aileron_r text-brand_primary hover:opacity-80 transition-opacity">
                  View
                </button>
              </td>
            </>
          )}
          itemsPerPage={10}
        />
      </div>
    </section>
  );
};

export default TutorDashboard;

