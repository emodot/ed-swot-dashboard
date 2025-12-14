import React, { useState } from "react";
import Table from "components/Table";
import QuickActions from "components/Inputs/QuickActions";
import SearchInput from "components/Inputs/SearchInput";
import ReceiptDetailsModal from "components/ReceiptDetailsModal";
import { Download, Upload, Eye, MoreVertical } from "lucide-react";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";

const MyReceipts = () => {
  const [filterValues, setFilterValues] = useState({
    date: "Last 7 Days",
    course: "Graphic Design Mastery",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dateOptions = [
    "Last 7 Days",
    "Last 30 Days",
    "Last 3 Months",
    "Last 6 Months",
    "Last Year",
  ];

  const courseOptions = [
    "Graphic Design Mastery",
    "Computer Fundamentals",
    "Mastering Excel",
    "Coding",
  ];

  const transactions = [
    {
      id: 1,
      customer: "Ariana Wilson",
      avatar: TutorAvatar,
      course: "Graphic Design Mastery",
      paymentMethod: "Bank Transfer",
      amount: "£19",
      date: "09/25/2025",
      email: "Arianawils.on@gmail.com",
      receiptId: "RE7452557",
    },
    {
      id: 2,
      customer: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Graphic Design Mastery",
      paymentMethod: "Bank Transfer",
      amount: "£45",
      date: "11/08/2025",
    },
    {
      id: 3,
      customer: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Graphic Design Mastery",
      paymentMethod: "Bank Transfer",
      amount: "£45",
      date: "11/08/2025",
    },
    {
      id: 4,
      customer: "Olatunji Gbemisola",
      avatar: TutorAvatar,
      course: "Graphic Design Mastery",
      paymentMethod: "Card",
      amount: "£4500",
      date: "11/08/2025",
    },
    {
      id: 5,
      customer: "John Doe",
      avatar: TutorAvatar,
      course: "Graphic Design Mastery",
      paymentMethod: "Card",
      amount: "£45",
      date: "10/08/2025",
    },
    {
      id: 6,
      customer: "Jane Smith",
      avatar: TutorAvatar,
      course: "Computer Fundamentals",
      paymentMethod: "Bank Transfer",
      amount: "£60",
      date: "09/08/2025",
    },
    {
      id: 7,
      customer: "Robert Johnson",
      avatar: TutorAvatar,
      course: "Mastering Excel",
      paymentMethod: "Card",
      amount: "£50",
      date: "08/08/2025",
    },
    {
      id: 8,
      customer: "Emily Davis",
      avatar: TutorAvatar,
      course: "Coding",
      paymentMethod: "Bank Transfer",
      amount: "£75",
      date: "07/08/2025",
    },
    {
      id: 9,
      customer: "Michael Brown",
      avatar: TutorAvatar,
      course: "Graphic Design Mastery",
      paymentMethod: "Card",
      amount: "£45",
      date: "06/08/2025",
    },
    {
      id: 10,
      customer: "Sarah Wilson",
      avatar: TutorAvatar,
      course: "Graphic Design Mastery",
      paymentMethod: "Card",
      amount: "£45",
      date: "05/08/2025",
    },
    {
      id: 11,
      customer: "David Martinez",
      avatar: TutorAvatar,
      course: "Computer Fundamentals",
      paymentMethod: "Bank Transfer",
      amount: "£60",
      date: "04/08/2025",
    },
    {
      id: 12,
      customer: "Lisa Anderson",
      avatar: TutorAvatar,
      course: "Mastering Excel",
      paymentMethod: "Card",
      amount: "£50",
      date: "03/08/2025",
    },
  ];

  const quickActions = [
    {
      label: "Download receipts PDF",
      icon: <Download size={18} />,
      bg: "bg-[#FCF9EA]",
      border: "border border-[#E3B62C]",
      hover: "hover:bg-light_brand_primary",
      onClick: () => console.log("Download PDF"),
    },
    {
      label: "Export receipts",
      icon: <Upload size={18} />,
      bg: "bg-[#F5F5F5]",
      border: "border border-[#848484]",
      hover: "hover:bg-neutral_disabled",
      onClick: () => console.log("Export receipts"),
    },
  ];

  return (
    <section className="p-4 md:p-6">
      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-14 font-aileron_r text-brand_secondary mb-4">
          Quick actions
        </h2>
        <QuickActions actions={quickActions} />
      </div>

      {/* Transactions Header */}
      <h1 className="text-20 font-aileron_sb text-brand_secondary mb-6">
        Transactions
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
                Date:
              </label>
              <select
                value={filterValues.date}
                onChange={(e) =>
                  setFilterValues((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
                className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
              >
                {dateOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
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
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <Table
        columns={[
          { header: "Customer" },
          { header: "Course" },
          { header: "Payment Method" },
          { header: "Amount Paid" },
          { header: "Date" },
          { header: "Actions" },
        ]}
        data={transactions}
        renderRow={(transaction) => (
          <>
            {/* Customer Column */}
            <td className="p-4">
              <div className="flex items-center gap-3">
                <img
                  src={transaction.avatar}
                  alt={transaction.customer}
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-14 font-aileron_sb text-brand_secondary">
                  {transaction.customer}
                </p>
              </div>
            </td>

            {/* Course Column */}
            <td className="p-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-12 font-aileron_sb text-[#E53935] bg-[#FFEDEB]">
                {transaction.course}
              </span>
            </td>

            {/* Payment Method Column */}
            <td className="p-4">
              <p className="text-14 font-aileron_r text-brand_secondary">
                {transaction.paymentMethod}
              </p>
            </td>

            {/* Amount Paid Column */}
            <td className="p-4">
              <p className="text-14 font-aileron_sb text-green-600">
                {transaction.amount}
              </p>
            </td>

            {/* Date Column */}
            <td className="p-4">
              <p className="text-14 font-aileron_r text-brand_secondary">
                {transaction.date}
              </p>
            </td>

            {/* Actions Column */}
            <td className="p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedReceipt(transaction);
                    setIsModalOpen(true);
                  }}
                  className="p-2 rounded-full border border-brand_primary hover:bg-light_brand_primary transition-colors"
                >
                  <Eye size={16} className="text-brand_secondary" />
                </button>
                <button className="p-2 rounded-full border border-neutral_stroke_2 hover:bg-neutral_disabled transition-colors">
                  <MoreVertical size={16} className="text-brand_secondary" />
                </button>
              </div>
            </td>
          </>
        )}
        itemsPerPage={10}
      />

      {/* Receipt Details Modal */}
      {isModalOpen && (
        <ReceiptDetailsModal
          receipt={selectedReceipt}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedReceipt(null);
          }}
          onDownload={(receipt) => {
            console.log("Downloading receipt:", receipt);
            // Implement download logic here
          }}
        />
      )}
    </section>
  );
};

export default MyReceipts;

