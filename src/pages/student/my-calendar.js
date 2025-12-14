import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MyCalendar = () => {
  const [currentView, setCurrentView] = useState("Day");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 25)); // May 25, 2025 (Thursday)

  // Sample events data - student-focused
  const events = [
    {
      id: 1,
      title: "Graphic Design Class",
      startTime: "9:30 AM",
      endTime: "11:00 AM",
      date: new Date(2025, 4, 25), // May 25, 2025 (Thursday)
      color: "bg-[#FFF4E6]",
      textColor: "text-[#E53935]",
    },
    {
      id: 2,
      title: "French Language Lesson",
      startTime: "2:00 PM",
      endTime: "3:30 PM",
      date: new Date(2025, 4, 25), // May 25, 2025
      color: "bg-[#FFF4E6]",
      textColor: "text-[#E53935]",
    },
    {
      id: 3,
      title: "Tutoring Session with Mrs. Olatunji",
      startTime: "10:30 AM",
      endTime: "12:00 PM",
      date: new Date(2025, 4, 18), // May 18, 2025
      color: "bg-[#FFF4E6]",
      textColor: "text-[#E53935]",
    },
    {
      id: 4,
      title: "Biology Class",
      startTime: "1:00 PM",
      endTime: "2:30 PM",
      date: new Date(2025, 4, 18), // May 18, 2025
      color: "bg-[#FFF4E6]",
      textColor: "text-[#E53935]",
    },
  ];

  // Generate time slots from 9 AM to 5 PM
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour === 12 ? 12 : hour % 12} ${hour >= 12 ? "PM" : "AM"}`);
  }

  // Format date
  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return {
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear(),
      dayName: days[date.getDay()],
    };
  };

  // Get events for a specific date
  const getEventsForDate = (date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  // Convert time to minutes from start of day (9 AM = 0)
  const timeToMinutes = (timeStr) => {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = hours * 60 + (minutes || 0);
    if (period === "PM" && hours !== 12) totalMinutes += 12 * 60;
    if (period === "AM" && hours === 12) totalMinutes -= 12 * 60;
    // Subtract 9 hours (9 AM = 0)
    return totalMinutes - 9 * 60;
  };

  // Calculate event position and height
  const getEventStyle = (event) => {
    const startMinutes = timeToMinutes(event.startTime);
    const endMinutes = timeToMinutes(event.endTime);
    const duration = endMinutes - startMinutes;
    const topPercent = (startMinutes / (8 * 60)) * 100; // 8 hours from 9 AM to 5 PM
    const heightPercent = (duration / (8 * 60)) * 100;
    return {
      top: `${topPercent}%`,
      height: `${heightPercent}%`,
    };
  };

  // Navigation handlers
  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    if (currentView === "Day") {
      newDate.setDate(newDate.getDate() - 1);
    } else if (currentView === "Week") {
      newDate.setDate(newDate.getDate() - 7);
    } else if (currentView === "Month") {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (currentView === "Day") {
      newDate.setDate(newDate.getDate() + 1);
    } else if (currentView === "Week") {
      newDate.setDate(newDate.getDate() + 7);
    } else if (currentView === "Month") {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const formattedDate = formatDate(currentDate);
  const dayEvents = getEventsForDate(currentDate);

  return (
    <section className="p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-20 font-aileron_sb text-brand_secondary">
          {formattedDate.day} {formattedDate.month} {formattedDate.year}
        </h1>

        {/* View Toggle Buttons */}
        <div className="flex items-center gap-2">
          {["Day", "Week", "Month"].map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`px-4 py-2 rounded-lg text-14 font-aileron_sb transition-colors ${
                currentView === view
                  ? "bg-brand_primary text-white"
                  : "bg-white text-brand_secondary border border-neutral_stroke_2 hover:bg-neutral_disabled"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar View */}
      {currentView === "Day" && (
        <div className="bg-white border border-neutral_stroke_2 rounded-lg overflow-hidden">
          <div className="flex">
            {/* Time Column */}
            <div className="w-24 border-r border-neutral_stroke_2">
              <div className="h-16 border-b border-neutral_stroke_2"></div>
              {timeSlots.map((time, index) => (
                <div
                  key={index}
                  className="h-16 border-b border-neutral_stroke_2 flex items-start justify-end pr-3 pt-2"
                >
                  <span className="text-12 font-aileron_r text-border_stroke_2">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* Day Column */}
            <div className="flex-1 relative">
              {/* Day Header */}
              <div className="h-16 border-b border-neutral_stroke_2 flex items-center justify-center">
                <span className="text-14 font-aileron_sb text-brand_secondary">
                  {formattedDate.dayName} {formattedDate.day}
                </span>
              </div>

              {/* Time Slots Container */}
              <div className="relative" style={{ height: "512px" }}>
                {/* Time Slot Grid Lines */}
                {timeSlots.map((_, index) => (
                  <div
                    key={index}
                    className="absolute left-0 right-0 border-b border-neutral_stroke_2"
                    style={{ top: `${(index * 100) / timeSlots.length}%` }}
                  ></div>
                ))}

                {/* Events */}
                {dayEvents.map((event) => {
                  const style = getEventStyle(event);
                  return (
                    <div
                      key={event.id}
                      className={`absolute left-2 right-2 ${event.color} ${event.textColor} rounded-lg p-2 border-l-4 border-[#E53935]`}
                      style={style}
                    >
                      <p className="text-12 font-aileron_sb leading-tight">
                        {event.title}
                      </p>
                      <p className="text-10 font-aileron_r mt-1">
                        {event.startTime} - {event.endTime}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-4 border-t border-neutral_stroke_2">
            <button
              onClick={handlePrevious}
              className="p-2 hover:bg-neutral_disabled rounded-lg transition-colors"
            >
              <ChevronLeft size={20} className="text-brand_secondary" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 hover:bg-neutral_disabled rounded-lg transition-colors"
            >
              <ChevronRight size={20} className="text-brand_secondary" />
            </button>
          </div>
        </div>
      )}

      {currentView === "Week" && (
        <div className="bg-white border border-neutral_stroke_2 rounded-lg p-8 text-center">
          <p className="text-14 font-aileron_r text-border_stroke_2">
            Week view coming soon
          </p>
        </div>
      )}

      {currentView === "Month" && (
        <div className="bg-white border border-neutral_stroke_2 rounded-lg p-8 text-center">
          <p className="text-14 font-aileron_r text-border_stroke_2">
            Month view coming soon
          </p>
        </div>
      )}
    </section>
  );
};

export default MyCalendar;

