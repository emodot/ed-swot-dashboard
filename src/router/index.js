import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

// Lazy Loaded Pages
const SignUp = lazy(() => import("../pages/auth/signup"));
const Login = lazy(() => import("../pages/auth/login"));
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const MembershipPlans = lazy(() =>
  import("../pages/auth/signup/membership-plans")
);
const MultiLearnerSetup = lazy(() =>
  import("../pages/auth/multi-learner-setup")
);
const Dashboard = lazy(() => import("../pages/student/dashboard"));
const MyCourses = lazy(() => import("../pages/student/my-courses"));
const MyTutors = lazy(() => import("../pages/student/my-tutors"));
const MyReceipts = lazy(() => import("../pages/student/my-receipts"));
const MyCalendar = lazy(() => import("../pages/student/my-calendar"));
const CourseLesson = lazy(() => import("../pages/student/course-lesson"));
const Settings = lazy(() => import("../pages/settings/index"));
const Account = lazy(() => import("../pages/settings/account"));
const Notification = lazy(() => import("../pages/settings/notifications"));
const Subscription = lazy(() => import("../pages/settings/subscription"));
const Security = lazy(() => import("../pages/settings/security"));
const TutorDashboard = lazy(() => import("../pages/tutor/dashboard"));
const TutorMyCourses = lazy(() => import("../pages/tutor/my-courses"));
const TutorMyStudents = lazy(() => import("../pages/tutor/my-students"));
const TutorMyCalendar = lazy(() => import("../pages/tutor/my-calendar"));

const router = createBrowserRouter([
  {
    path: "/auth",
    errorElement: <ErrorPage />,
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "signup/membership-plans",
        element: <MembershipPlans />,
      },
      {
        path: "multi-learner-setup",
        element: <MultiLearnerSetup />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      // Student routes
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "my-tutors",
        element: <MyTutors />,
      },
      {
        path: "my-receipts",
        element: <MyReceipts />,
      },
      {
        path: "my-calendar",
        element: <MyCalendar />,
      },
      {
        path: "course/:courseId/lesson/:lessonId",
        element: <CourseLesson />,
      },
      // Tutor routes
      {
        path: "tutor/dashboard",
        element: <TutorDashboard />,
      },
      {
        path: "tutor/my-courses",
        element: <TutorMyCourses />,
      },
      {
        path: "tutor/my-students",
        element: <TutorMyStudents />,
      },
      {
        path: "tutor/my-calendar",
        element: <TutorMyCalendar />,
      },
      // Settings (shared)
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
          {
            path: "subscription",
            element: <Subscription />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            index: true,
            element: <Account />,
          },
        ],
      },
    ],
  },
]);

export { router };
