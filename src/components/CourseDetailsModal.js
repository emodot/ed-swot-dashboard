import React from "react";
import { X, Video, Clock, Tablet, Play, MapPin, Award } from "lucide-react";
import { ReactComponent as TutorIcon } from "assets/icons/tutor-icon.svg";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";
import UserImg from "assets/images/mocks/user-img.png";
import CourseOutline from "./CourseOutline";

const CourseDetailsModal = ({ course, onClose }) => {

  if (!course) return null;

  const courseContents = [
    { icon: <Video size={20} />, text: "65 Hours Expert Taught Classes" },
    { icon: <Clock size={20} />, text: "3 Months Course Duration" },
    { icon: <Tablet size={20} />, text: "Access On Multiple Device" },
    { icon: <Play size={20} />, text: "24/7 Video Access" },
    { icon: <MapPin size={20} />, text: "Join Live Classes Anywhere" },
    { icon: <Award size={20} />, text: "Certificate Of Completion" },
  ];

  const courseOutline = [
    {
      title: "Excel Fundamentals And Techniques",
      duration: "24 mins",
      lessons: [
        { title: "Understanding Industry Tools", duration: "14 mins" },
        { title: "Understanding Industry Tools", duration: "17 mins" },
        { title: "Understanding Industry Tools", duration: "4 mins" },
        { title: "Understanding Industry Tools", duration: "10 mins" },
      ],
    },
    {
      title: "Advanced Excel Functions",
      duration: "32 mins",
      lessons: [],
    },
    {
      title: "Data Analysis with Excel",
      duration: "28 mins",
      lessons: [],
    },
    {
      title: "Excel Macros and Automation",
      duration: "35 mins",
      lessons: [],
    },
    {
      title: "Excel for Business Intelligence",
      duration: "40 mins",
      lessons: [],
    },
  ];

  const successStories = [
    {
      text: "The tutors here are simply amazing! They're patient, knowledgeable, and genuinely care about helping you understand.",
      name: "Sarah Khumalo",
      role: "Student",
      avatar: UserImg,
    },
    {
      text: "The tutors here are simply amazing! They're patient, knowledgeable, and genuinely care about helping you understand.",
      name: "Sarah Khumalo",
      role: "Student",
      avatar: UserImg,
    },
    {
      text: "The tutors here are simply amazing! They're patient, knowledgeable, and genuinely care about helping you understand.",
      name: "Sarah Khumalo",
      role: "Student",
      avatar: UserImg,
    },
    {
      text: "The tutors here are simply amazing! They're patient, knowledgeable, and genuinely care about helping you understand.",
      name: "Sarah Khumalo",
      role: "Student",
      avatar: UserImg,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-neutral_disabled rounded-full transition-colors"
        >
          <X size={24} className="text-brand_secondary" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Main Content Area */}
          <div className="flex-1 p-6 lg:p-8">
            {/* Title */}
            <h1 className="text-28 font-aileron_sb text-brand_secondary mb-6 pr-10">
              {course.title}
              {course.subtitle && (
                <span className="text-20 font-aileron_sb text-brand_secondary">
                  {" "}
                  {course.subtitle}
                </span>
              )}
            </h1>

            {/* Course Image */}
            <div
              className="w-full h-[300px] rounded-lg mb-6"
              style={{
                backgroundImage: `url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Course Description */}
            <div className="mb-6">
              <h2 className="text-20 font-aileron_sb text-brand_secondary mb-3">
                Course Description
              </h2>
              <p className="text-14 font-aileron_r text-[#434343] leading-relaxed">
                {course.desc}
              </p>
              <p className="text-14 font-aileron_r text-[#434343] leading-relaxed mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-14 font-aileron_r text-[#434343] leading-relaxed mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            {/* Course Highlight */}
            <div className="mb-6">
              <h2 className="text-20 font-aileron_sb text-brand_secondary mb-3">
                Course Highlight
              </h2>
              <p className="text-14 font-aileron_r text-[#434343] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Numbered Sections */}
            <div className="mb-6">
              {[
                { title: "Tools", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { title: "Creative Process", desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { title: "Colours", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
                { title: "Typography", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
                { title: "Design Principles", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
              ].map((section, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-16 font-aileron_sb text-brand_secondary mb-2">
                    {index + 1}. {section.title}
                  </h3>
                  <p className="text-14 font-aileron_r text-[#434343]">
                    {section.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Success Stories */}
            <div className="mb-6">
              <h2 className="text-20 font-aileron_sb text-brand_secondary mb-4">
                Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className="border border-neutral_stroke_2 rounded-lg p-4 bg-white"
                  >
                    <p className="text-20 text-brand_secondary mb-3">"</p>
                    <p className="text-14 font-aileron_r text-[#434343] mb-4">
                      {story.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-14 font-aileron_sb text-brand_secondary">
                          {story.name}
                        </p>
                        <p className="text-12 text-border_stroke_2">{story.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-[400px] border-l border-neutral_stroke_2 p-6 lg:p-8 mt-[40px]">
            {/* Enroll Now Button - Top */}
            <button className="w-full bg-brand_primary text-brand_secondary font-aileron_sb text-16 py-3 rounded-lg mb-6 hover:opacity-90 transition-opacity">
              Enroll Now
            </button>

            {/* Course Contents */}
            <div className="mb-6">
              <h3 className="text-18 font-aileron_sb text-brand_secondary mb-4">
                Course Contents
              </h3>
              <div className="space-y-3">
                {courseContents.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-14 font-aileron_r text-[#434343]"
                  >
                    <span className="text-brand_secondary">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Outline */}
            <CourseOutline courseOutline={courseOutline} defaultExpanded={0} />

            {/* Course Tutor */}
            <div className="mb-6">
              <h3 className="text-18 font-aileron_sb text-brand_secondary mb-4">
                Course Tutor
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={course.tutorImg || TutorAvatar}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-14 font-aileron_sb text-brand_secondary">
                    {course.instructor}
                  </p>
                  <p className="text-12 text-border_stroke_2">
                    {course.tutorRole || "Science Professor"}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 items-center bg-[#EBF5FF] rounded-[16px] px-3 py-1 w-fit">
                <TutorIcon />
                <p className="font-albra_sans_m text-[#166EB4] text-14">Tutor</p>
              </div>
            </div>

            {/* Enroll Now Button - Bottom */}
            <button className="w-full bg-brand_primary text-brand_secondary font-aileron_sb text-16 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;

