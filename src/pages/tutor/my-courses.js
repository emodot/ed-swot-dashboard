import React, { useState, useMemo } from "react";
import TutorCourseCard from "components/Tutor/TutorCourseCard";
import SearchInput from "components/Inputs/SearchInput";
import Course1 from "assets/images/mocks/course-1.png";
import Course2 from "assets/images/mocks/course-2.png";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TutorMyCourses = () => {
  const [filterValues, setFilterValues] = useState({
    course: "All",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const courseOptions = ["All", "In Progress", "Completed", "Not Started"];

  const courses = [
    {
      id: 1,
      title: "Computer Fundamentals",
      progress: 50,
      category: "Software & Tech",
      image: Course1,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 13,
    },
    {
      id: 2,
      title: "Mastering Excel",
      progress: 7,
      category: "Software & Tech",
      image: Course2,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 10,
    },
    {
      id: 3,
      title: "Graphics Design",
      progress: 75,
      category: "Design",
      image: Course1,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 15,
    },
    {
      id: 4,
      title: "Coding Basics",
      progress: 30,
      category: "Software & Tech",
      image: Course2,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 8,
    },
    {
      id: 5,
      title: "Web Development",
      progress: 90,
      category: "Software & Tech",
      image: Course1,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 20,
    },
    {
      id: 6,
      title: "Data Science",
      progress: 45,
      category: "Science",
      image: Course2,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 12,
    },
    {
      id: 7,
      title: "Mobile App Development",
      progress: 60,
      category: "Software & Tech",
      image: Course1,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 18,
    },
    {
      id: 8,
      title: "UI/UX Design",
      progress: 25,
      category: "Design",
      image: Course2,
      studentAvatars: [TutorAvatar, TutorAvatar, TutorAvatar],
      studentCount: 9,
    },
  ];

  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Filter by course status
    if (filterValues.course !== "All") {
      // This is a simplified filter - in production, you'd check actual status
      filtered = filtered;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [filterValues, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="p-4 md:p-6">
      {/* Courses Header */}
      <h1 className="text-20 font-aileron_sb text-brand_secondary mb-6">
        Courses
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
            <div className="w-full md:flex-1 md:max-w-[300px]">
              <SearchInput
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedCourses.map((course) => (
          <TutorCourseCard
            key={course.id}
            title={course.title}
            progress={course.progress}
            category={course.category}
            image={course.image}
            studentAvatars={course.studentAvatars}
            studentCount={course.studentCount}
            courseId={course.id}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 border border-neutral_stroke_2 rounded-lg text-14 font-aileron_r text-brand_secondary hover:bg-neutral_disabled disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-lg text-14 font-aileron_sb transition-colors ${
                      currentPage === page
                        ? "bg-brand_primary text-white"
                        : "text-brand_secondary hover:bg-neutral_disabled"
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (
                page === currentPage - 2 ||
                page === currentPage + 2
              ) {
                return (
                  <span
                    key={page}
                    className="px-2 text-brand_secondary text-14"
                  >
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 border border-neutral_stroke_2 rounded-lg text-14 font-aileron_r text-brand_secondary hover:bg-neutral_disabled disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
};

export default TutorMyCourses;

