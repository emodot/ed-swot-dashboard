import React, { useState } from "react";
import DashboardStats from "components/Dashboard/DashboardStats";
import InprogressCourseCard from "components/Dashboard/InprogressCourseCard";
import CourseCard from "components/Dashboard/CourseCard";
import NewCourseAlert from "components/Dashboard/NewCourseAlert";
import Course1 from "assets/images/mocks/course-1.png";
import Course2 from "assets/images/mocks/course-2.png";
import Course3 from "assets/images/mocks/course-3.png";
import Course4 from "assets/images/mocks/course-4.png";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as ArrowRight } from "assets/icons/carousel-arrow-right.svg";
import { ReactComponent as ArrowLeft } from "assets/icons/carousel-arrow-left.svg";
import Activities from "components/Dashboard/Activities";

const Dashboard = () => {
  const [showNewCourseAlert, setShowNewCourseAlert] = useState(true);

  const recommendedCourses = [
    {
      title: "Computer Fundamentals",
      desc: "Sharpen your fluency, perfect your grammar, and expand your vocabulary through immersive, real-time lessons.",
      instructor: "Prashant Kumar Singh",
      instructorRole: "Science Professor",
      instructorImg: TutorAvatar,
      category: "Course",
      image: Course1,
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

  return (
    <section className="p-4 md:p-6">
      {showNewCourseAlert && (
        <NewCourseAlert closeAlert={() => setShowNewCourseAlert(false)} />
      )}
      {/* Stats */}
      <DashboardStats />
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
              />
            </div>
          ))}
        </div>
      </div>

      {/* Activities and Calender */}
      <div className="grid grid-cols-2 mb-8">
        <Activities />
      </div>

      {/* Recommended Courses */}
      <div className="mb-10">
        <h2 className="text-20 font-aileron_sb text-brand_secondary mb-4">
          Recommended Courses
        </h2>
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
