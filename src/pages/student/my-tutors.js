import React, { useState } from "react";
import Table from "components/Table";
import StatusBadge from "components/StatusBadge";
import SearchInput from "components/Inputs/SearchInput";
import { CheckCircle2 } from "lucide-react";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";

const MyTutors = () => {
  const [filterValues, setFilterValues] = useState({
    course: "All",
    status: "All",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const courseOptions = ["All", "Biology", "Mathematics", "Coding"];

  const statusOptions = ["All", "Ongoing", "Completed"];

  const tutors = [
    {
      id: 1,
      name: "Mrs. Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Biology",
      status: "Ongoing",
    },
    {
      id: 2,
      name: "Mrs. Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Mathematics",
      status: "Ongoing",
    },
    {
      id: 3,
      name: "Mrs. Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Coding",
      status: "Completed",
    },
    {
      id: 4,
      name: "Dr. James Anderson",
      avatar: TutorAvatar,
      course: "Physics",
      status: "Ongoing",
    },
    {
      id: 5,
      name: "Prof. Sarah Williams",
      avatar: TutorAvatar,
      course: "Chemistry",
      status: "Completed",
    },
    {
      id: 6,
      name: "Mr. Michael Brown",
      avatar: TutorAvatar,
      course: "Mathematics",
      status: "Ongoing",
    },
    {
      id: 7,
      name: "Dr. Emily Davis",
      avatar: TutorAvatar,
      course: "Biology",
      status: "Ongoing",
    },
    {
      id: 8,
      name: "Mrs. Jennifer Martinez",
      avatar: TutorAvatar,
      course: "Coding",
      status: "Completed",
    },
    {
      id: 9,
      name: "Prof. Robert Taylor",
      avatar: TutorAvatar,
      course: "Physics",
      status: "Ongoing",
    },
    {
      id: 10,
      name: "Dr. Lisa Johnson",
      avatar: TutorAvatar,
      course: "Chemistry",
      status: "Ongoing",
    },
    {
      id: 11,
      name: "Mr. David Wilson",
      avatar: TutorAvatar,
      course: "Mathematics",
      status: "Completed",
    },
    {
      id: 12,
      name: "Mrs. Patricia Moore",
      avatar: TutorAvatar,
      course: "Biology",
      status: "Ongoing",
    },
    {
      id: 13,
      name: "Dr. Christopher Lee",
      avatar: TutorAvatar,
      course: "Coding",
      status: "Ongoing",
    },
    {
      id: 14,
      name: "Prof. Amanda White",
      avatar: TutorAvatar,
      course: "Physics",
      status: "Completed",
    },
    {
      id: 15,
      name: "Mr. Daniel Harris",
      avatar: TutorAvatar,
      course: "Chemistry",
      status: "Ongoing",
    },
    {
      id: 16,
      name: "Dr. Michelle Clark",
      avatar: TutorAvatar,
      course: "Mathematics",
      status: "Ongoing",
    },
    {
      id: 17,
      name: "Mrs. Kevin Lewis",
      avatar: TutorAvatar,
      course: "Biology",
      status: "Completed",
    },
    {
      id: 18,
      name: "Prof. Stephanie Walker",
      avatar: TutorAvatar,
      course: "Coding",
      status: "Ongoing",
    },
    {
      id: 19,
      name: "Dr. Brian Hall",
      avatar: TutorAvatar,
      course: "Physics",
      status: "Ongoing",
    },
    {
      id: 20,
      name: "Mr. Nancy Allen",
      avatar: TutorAvatar,
      course: "Chemistry",
      status: "Completed",
    },
    {
      id: 21,
      name: "Dr. Mark Young",
      avatar: TutorAvatar,
      course: "Mathematics",
      status: "Ongoing",
    },
    {
      id: 22,
      name: "Mrs. Karen King",
      avatar: TutorAvatar,
      course: "Biology",
      status: "Ongoing",
    },
    {
      id: 23,
      name: "Prof. Thomas Wright",
      avatar: TutorAvatar,
      course: "Coding",
      status: "Completed",
    },
    {
      id: 24,
      name: "Dr. Barbara Lopez",
      avatar: TutorAvatar,
      course: "Physics",
      status: "Ongoing",
    },
    {
      id: 25,
      name: "Mr. Richard Hill",
      avatar: TutorAvatar,
      course: "Chemistry",
      status: "Ongoing",
    },
    {
      id: 26,
      name: "Dr. Susan Scott",
      avatar: TutorAvatar,
      course: "Mathematics",
      status: "Completed",
    },
    {
      id: 27,
      name: "Mrs. Joseph Green",
      avatar: TutorAvatar,
      course: "Biology",
      status: "Ongoing",
    },
    {
      id: 28,
      name: "Prof. Jessica Adams",
      avatar: TutorAvatar,
      course: "Coding",
      status: "Ongoing",
    },
    {
      id: 29,
      name: "Dr. Charles Baker",
      avatar: TutorAvatar,
      course: "Physics",
      status: "Completed",
    },
    {
      id: 30,
      name: "Mr. Dorothy Nelson",
      avatar: TutorAvatar,
      course: "Chemistry",
      status: "Ongoing",
    },
  ];

  return (
    <section className="p-4 md:p-6">
      {/* Tutors Header */}
      <h1 className="text-20 font-aileron_sb text-brand_secondary mb-6">
        Tutors
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
            <div className="flex items-center gap-2">
              <label className="text-[14px] font-aileron_r capitalize">
                Status:
              </label>
              <select
                value={filterValues.status}
                onChange={(e) =>
                  setFilterValues((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }
                className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
              >
                {statusOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
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

      {/* Tutors Table */}
      <Table
        columns={[
          { header: "Tutors" },
          { header: "Courses" },
          { header: "Status" },
          { header: "Actions" },
        ]}
        data={tutors}
        renderRow={(tutor) => (
          <>
            {/* Tutors Column */}
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
                    <CheckCircle2
                      size={16}
                      className="text-white"
                      fill="white"
                    />
                  </div>
                </div>
                <p className="text-14 font-aileron_sb text-brand_secondary">
                  {tutor.name}
                </p>
              </div>
            </td>

            {/* Courses Column */}
            <td className="p-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-12 font-aileron_sb text-[#E53935] bg-[#FFEDEB]`}
              >
                {tutor.course}
              </span>
            </td>

            {/* Status Column */}
            <td className="p-4">
              <StatusBadge status={tutor.status} />
            </td>

            {/* Actions Column */}
            <td className="p-4">
              <button className="flex items-center gap-2 text-[#166EB4] font-aileron_r text-14 hover:opacity-80 transition-opacity">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.21303 15.484 4.60667 15.8663 6.12572 15.9705L6.42539 14.9864C4.9297 14.9145 3.62328 14.5596 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11C1 10.4467 1.44786 10 2.00873 10L6.59955 10C6.78244 9.64222 7.00337 9.30711 7.257 9L2.00873 9ZM16 12.5C16 14.9853 13.9853 17 11.5 17C10.7085 17 9.96465 16.7956 9.31846 16.4368L7.52936 16.9812C7.21625 17.0765 6.92358 16.7838 7.01892 16.4707L7.56353 14.6821C7.20449 14.0358 7 13.2918 7 12.5C7 10.0147 9.01472 8 11.5 8C13.9853 8 16 10.0147 16 12.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12H13.5C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11H9.5ZM9 13.5C9 13.7761 9.22386 14 9.5 14H11.5C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13H9.5C9.22386 13 9 13.2239 9 13.5Z"
                    fill="#166EB4"
                  />
                </svg>
                Message
              </button>
            </td>
          </>
        )}
      />
    </section>
  );
};

export default MyTutors;
