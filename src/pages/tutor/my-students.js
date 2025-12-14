import React, { useState } from "react";
import Table from "components/Table";
import SearchInput from "components/Inputs/SearchInput";
import { MessageCircle } from "lucide-react";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";

const MyStudents = () => {
  const [filterValues, setFilterValues] = useState({
    date: "All",
    course: "All",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const dateOptions = ["All", "Last 7 Days", "Last 30 Days", "Last 3 Months"];
  const courseOptions = ["All", "French Language", "Graphic Design"];

  const students = [
    {
      id: 1,
      name: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "11/1/2024",
    },
    {
      id: 2,
      name: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "11/1/2024",
    },
    {
      id: 3,
      name: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "11/1/2024",
    },
    {
      id: 4,
      name: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "11/1/2024",
    },
    {
      id: 5,
      name: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "11/1/2024",
    },
    {
      id: 6,
      name: "John Doe",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "10/15/2024",
    },
    {
      id: 7,
      name: "Jane Smith",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "10/10/2024",
    },
    {
      id: 8,
      name: "Michael Brown",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "9/20/2024",
    },
    {
      id: 9,
      name: "Sarah Johnson",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "9/15/2024",
    },
    {
      id: 10,
      name: "David Wilson",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "8/30/2024",
    },
    {
      id: 11,
      name: "Emily Davis",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "8/25/2024",
    },
    {
      id: 12,
      name: "James Anderson",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "8/20/2024",
    },
    {
      id: 13,
      name: "Olivia Martinez",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "8/15/2024",
    },
    {
      id: 14,
      name: "William Taylor",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "8/10/2024",
    },
    {
      id: 15,
      name: "Sophia White",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "8/5/2024",
    },
    {
      id: 16,
      name: "Benjamin Harris",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "7/30/2024",
    },
    {
      id: 17,
      name: "Isabella Clark",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "7/25/2024",
    },
    {
      id: 18,
      name: "Lucas Lewis",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "7/20/2024",
    },
    {
      id: 19,
      name: "Mia Walker",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "7/15/2024",
    },
    {
      id: 20,
      name: "Henry Hall",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "7/10/2024",
    },
    {
      id: 21,
      name: "Ava Allen",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "7/5/2024",
    },
    {
      id: 22,
      name: "Alexander Young",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "6/30/2024",
    },
    {
      id: 23,
      name: "Charlotte King",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "6/25/2024",
    },
    {
      id: 24,
      name: "Daniel Wright",
      avatar: TutorAvatar,
      course: "Graphic Design",
      dateJoined: "6/20/2024",
    },
    {
      id: 25,
      name: "Amelia Lopez",
      avatar: TutorAvatar,
      course: "French Language",
      dateJoined: "6/15/2024",
    },
  ];

  return (
    <section className="p-4 md:p-6">
      {/* Students Header */}
      <h1 className="text-20 font-aileron_sb text-brand_secondary mb-6">
        My Students
      </h1>

      {/* Filter Bar */}
      <div className="mb-8">
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
                value={filterValues.date}
                onChange={(e) =>
                  setFilterValues((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
                className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
              >
                {dateOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[14px] font-aileron_r capitalize">
                Course:
              </label>
              <select
                value={filterValues.course}
                onChange={(e) =>
                  setFilterValues((prev) => ({
                    ...prev,
                    course: e.target.value,
                  }))
                }
                className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
              >
                {courseOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="w-full md:flex-1 md:max-w-[300px]">
              <SearchInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name"
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
          { header: "Action" },
        ]}
        data={students}
        renderRow={(student) => (
          <>
            {/* Students Column */}
            <td className="p-4">
              <div className="flex items-center gap-3">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-14 font-aileron_sb text-brand_secondary">
                  {student.name}
                </p>
              </div>
            </td>

            {/* Courses Column */}
            <td className="p-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-12 font-aileron_sb text-[#E53935] bg-[#FFEDEB]">
                {student.course}
              </span>
            </td>

            {/* Date Joined Column */}
            <td className="p-4">
              <p className="text-14 font-aileron_r text-brand_secondary">
                {student.dateJoined}
              </p>
            </td>

            {/* Action Column */}
            <td className="p-4">
              <button className="flex items-center gap-2 text-[#166EB4] font-aileron_r text-14 hover:opacity-80 transition-opacity">
                <MessageCircle size={16} />
                Message
              </button>
            </td>
          </>
        )}
        itemsPerPage={5}
        showPagination={true}
      />
    </section>
  );
};

export default MyStudents;

