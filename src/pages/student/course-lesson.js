import React from "react";
import { Link } from "react-router-dom";
import {
  Video,
  Clock,
  Tablet,
  Play,
  MapPin,
  Award,
  MessageCircle,
} from "lucide-react";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";
import UserImg from "assets/images/mocks/user-img.png";
import Course2 from "assets/images/mocks/course-2.png";
import CourseOutline from "components/CourseOutline";

const CourseLesson = () => {
  // Mock course data - in real app, fetch based on courseId
  const course = {
    title: "Mastering Excel",
    lessonTitle: "Lesson 1: Excel Fundamentals and Techniques",
    image: Course2,
    instructor: "Prashant Kumar Singh",
    tutorRole: "Science Professor",
    tutorImg: TutorAvatar,
  };

  const courseContents = [
    { icon: <Video size={20} />, text: "65 Hours Expert Taught Classes" },
    { icon: <Clock size={20} />, text: "3 Months Course Duration" },
    { icon: <Tablet size={20} />, text: "Access On Multiple Device" },
    { icon: <Play size={20} />, text: "24/7 Video Access" },
    { icon: <MapPin size={20} />, text: "Join Live Classes Anywhere" },
    { icon: <Award size={20} />, text: "Get Certified On Course Completion" },
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
      title: "Excel Fundamentals And Techniques",
      duration: "24 mins",
      lessons: [],
    },
    {
      title: "Excel Fundamentals And Techniques",
      duration: "24 mins",
      lessons: [],
    },
    {
      title: "Excel Fundamentals And Techniques",
      duration: "24 mins",
      lessons: [],
    },
    {
      title: "Excel Fundamentals And Techniques",
      duration: "24 mins",
      lessons: [],
    },
  ];

  const successStories = [
    { name: "John Doe", avatar: UserImg },
    { name: "Jane Smith", avatar: UserImg },
    { name: "Robert Johnson", avatar: UserImg },
    { name: "Emily Davis", avatar: UserImg },
  ];

  return (
    <section className="p-4 md:p-6">
      {/* Breadcrumbs */}
      <div className="mb-4">
        <nav className="text-14 font-aileron_r text-border_stroke_2">
          <Link to="/my-courses" className="hover:text-brand_secondary">
            My Course
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brand_secondary">{course.title} Course</span>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content Area */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-24 font-aileron_sb text-brand_secondary mb-6">
            {course.lessonTitle}
          </h1>

          {/* Video Player */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-6 bg-neutral_disabled">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${course.image})`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                  <Play
                    size={48}
                    className="text-brand_secondary ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-6">
            <h2 className="text-20 font-aileron_sb text-brand_secondary mb-3">
              Course Description
            </h2>
            <p className="text-14 font-aileron_r text-[#434343] leading-relaxed">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-lg p-6 sticky top-6">

            {/* Course Outline */}
            <CourseOutline courseOutline={courseOutline} defaultExpanded={0} />

            {/* Course Tutor */}
            <div className="mb-6">
              <h3 className="text-18 font-aileron_sb text-brand_secondary mb-4">
                Course Tutor
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={course.tutorImg}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-14 font-aileron_sb text-brand_secondary">
                    {course.instructor}
                  </p>
                  <p className="text-12 text-border_stroke_2">
                    {course.tutorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLesson;
