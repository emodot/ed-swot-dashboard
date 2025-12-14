import React, { useState } from "react";
import { Play, ChevronDown, ChevronUp } from "lucide-react";

const CourseOutline = ({ courseOutline, defaultExpanded = 0 }) => {
  const [expandedModule, setExpandedModule] = useState(defaultExpanded);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? -1 : index);
  };

  return (
    <div className="mb-6">
      <h3 className="text-18 font-aileron_sb text-brand_secondary mb-4">
        Course Outline
      </h3>
      <div className="space-y-2">
        {courseOutline.map((module, index) => (
          <div key={index} className="border border-neutral_stroke_2 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleModule(index)}
              className="w-full flex items-center justify-between p-3 hover:bg-neutral_disabled transition-colors bg-white"
            >
              <div className="flex items-center gap-2 flex-1 text-left min-w-0">
                <span className="text-14 font-aileron_sb text-brand_secondary whitespace-nowrap">
                  {String(index + 1).padStart(2, '0')}:
                </span>
                <Play size={16} className="text-brand_secondary flex-shrink-0" />
                <span className="text-14 font-aileron_sb text-brand_secondary truncate flex-1">
                  {module.title}
                </span>
                <span className="text-12 text-border_stroke_2 whitespace-nowrap ml-2">{module.duration}</span>
              </div>
              <div className="flex-shrink-0 ml-2">
                {expandedModule === index ? (
                  <ChevronUp size={20} className="text-brand_secondary" />
                ) : (
                  <ChevronDown size={20} className="text-brand_secondary" />
                )}
              </div>
            </button>
            {expandedModule === index && module.lessons && module.lessons.length > 0 && (
              <div className="bg-neutral_disabled border-t border-neutral_stroke_2 p-3 space-y-3">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex items-center gap-2 text-14 font-aileron_r text-[#434343]"
                  >
                    <Play size={14} className="text-brand_secondary flex-shrink-0" />
                    <span className="flex-1 min-w-0 truncate">{lesson.title}</span>
                    <span className="text-12 text-border_stroke_2 whitespace-nowrap">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOutline;

