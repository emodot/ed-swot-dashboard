import React, { useState } from "react";
import InprogressCourseCard from "components/Dashboard/InprogressCourseCard";
import CourseCard from "components/Dashboard/CourseCard";
import CourseDetailsModal from "components/CourseDetailsModal";
import SearchInput from "components/Inputs/SearchInput";
import Course1 from "assets/images/mocks/course-1.png";
import Course2 from "assets/images/mocks/course-2.png";
import Course3 from "assets/images/mocks/course-3.png";
import Course4 from "assets/images/mocks/course-4.png";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";
import { Eye } from "lucide-react";

const MyCourses = () => {
  const [filterValues, setFilterValues] = useState({
    course: "All",
    tutor: "Mr. White Thompson",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);

  const courseOptions = ["All", "In Progress", "Completed", "Not Started"];

  const tutorOptions = [
    "Mr. White Thompson",
    "Prashant Kumar Singh",
    "John Doe",
  ];

  const recommendedCourses = [
    {
      title: "Graphics Design",
      desc: "Sharpen your fluency, perfect your grammar, and expand your vocabulary through immersive, real-time lessons.",
      instructor: "Prashant Kumar Singh",
      instructorRole: "Science Professor",
      instructorImg: TutorAvatar,
      category: "Course",
      image: Course3,
    },
    {
      title: "Coding",
      subtitle: "(Scratch, Python, 3D, HTML)",
      desc: "Sharpen your fluency, perfect your grammar, and expand your vocabulary through immersive, real-time lessons.",
      instructor: "Prashant Kumar Singh",
      instructorRole: "Science Professor",
      instructorImg: TutorAvatar,
      category: "Course",
      image: Course4,
    },
    {
      title: "Mastering Excel",
      desc: "Sharpen your fluency, perfect your grammar, and expand your vocabulary through immersive, real-time lessons.",
      instructor: "Prashant Kumar Singh",
      instructorRole: "Science Professor",
      instructorImg: TutorAvatar,
      category: "Course",
      image: Course2,
    },
    {
      title: "Computer Fundamentals",
      desc: "Sharpen your fluency, perfect your grammar, and expand your vocabulary through immersive, real-time lessons.",
      instructor: "Prashant Kumar Singh",
      instructorRole: "Science Professor",
      instructorImg: TutorAvatar,
      category: "Course",
      image: Course1,
    },
  ];

  const continueWatching = [
    {
      title: "Computer Fundamentals",
      instructor: "Prashant Kumar Singh",
      progress: 50,
      instructorImg: TutorAvatar,
      category: "Software & Tech",
      image: Course1,
    },
    {
      title: "Mastering Excel",
      instructor: "Prashant Kumar Singh",
      progress: 7,
      instructorImg: TutorAvatar,
      category: "Software & Tech",
      image: Course2,
    },
  ];

  const handleViewDetails = (course) => {
    setSelectedCourseDetails(course);
  };

  const handleCloseModal = () => {
    setSelectedCourseDetails(null);
  };

  return (
    <section className="p-4 md:p-6">
      {/* Course Details Modal */}
      {selectedCourseDetails && (
        <CourseDetailsModal
          course={selectedCourseDetails}
          onClose={handleCloseModal}
        />
      )}
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
                Courses:
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
                Tutor:
              </label>
              <select
                value={filterValues.tutor}
                onChange={(e) =>
                  setFilterValues((prev) => ({
                    ...prev,
                    tutor: e.target.value,
                  }))
                }
                className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
              >
                {tutorOptions.map((opt) => (
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

      {/* Continue Watching */}
      <div className="mb-10">
        <h2 className="text-20 font-aileron_sb text-brand_secondary mb-4">
          Continue Watching
        </h2>
        <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
          {continueWatching.map((item, index) => (
            <div key={index} className="min-w-[330px] flex-shrink-0">
              <InprogressCourseCard
                title={item?.title}
                progress={item?.progress}
                instructor={item?.instructor}
                category={item?.category}
                image={item?.image}
                tutorImg={item?.instructorImg}
                courseId={item?.title?.toLowerCase().replace(/\s+/g, '-')}
                lessonId="1"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-20 font-aileron_sb text-brand_secondary">
            Recommended Courses
          </h2>
          <button className="flex items-center gap-2 text-[#166EB4] font-aileron_r text-14 hover:underline">
            <Eye size={18} />
            View All Courses
          </button>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
          {recommendedCourses.map((item, index) => (
            <div key={index} className="min-w-[330px] flex-shrink-0">
              <CourseCard
                title={item?.title}
                subtitle={item?.subtitle}
                desc={item?.desc}
                instructor={item?.instructor}
                category={item?.category}
                image={item?.image}
                tutorRole={item?.instructorRole}
                tutorImg={item?.instructorImg}
                onViewDetails={() => handleViewDetails(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCourses;

