import React from "react";

const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    const configs = {
      Ongoing: {
        bgColor: "bg-orange-100",
        textColor: "text-[#F5853F]",
        borderColor: "border-orange-200",
        dotColor: "bg-[#F5853F]",
      },
      Completed: {
        bgColor: "bg-green-100",
        textColor: "text-[#08CF5A]",
        borderColor: "border-green-200",
        dotColor: "bg-[#08CF5A]",
      },
    };
    return (
      configs[status] || {
        bgColor: "bg-gray-100",
        textColor: "text-[#6E6E6E]",
        borderColor: "border-gray-200",
        dotColor: "bg-[#6E6E6E]",
      }
    );
  };

  const config = getStatusConfig(status);

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-12 font-aileron_r border ${config.bgColor} ${config.textColor} ${config.borderColor}`}
    >
      <span className={`w-2 h-2 rounded-full ${config.dotColor}`}></span>
      {status}
    </span>
  );
};

export default StatusBadge;

