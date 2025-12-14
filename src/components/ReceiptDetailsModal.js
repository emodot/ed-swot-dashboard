import React from "react";
import { X, CheckCircle2, Download } from "lucide-react";

const ReceiptDetailsModal = ({ receipt, onClose, onDownload }) => {
  if (!receipt) return null;

  const formatDate = (dateString) => {
    // Convert date format from "09/25/2025" or "11/08/2025" to "Sept 25, 2025 12:34 PM"
    // Parse MM/DD/YYYY format
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const month = parseInt(parts[0], 10) - 1; // Month is 0-indexed
      const day = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day, 12, 34); // Set time to 12:34 PM as per design

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthName = months[date.getMonth()];
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, "0");
      return `${monthName} ${day}, ${year} ${displayHours}:${displayMinutes} ${ampm}`;
    }
    return dateString; // Fallback to original if parsing fails
  };

  const receiptDetails = [
    {
      label: "Receipt ID",
      value: receipt.receiptId || `RE${receipt.id.toString().padStart(7, "0")}`,
    },
    { label: "Name", value: receipt.customer },
    {
      label: "Email",
      value:
        receipt.email ||
        `${receipt.customer.toLowerCase().replace(/\s+/g, "")}@gmail.com`,
    },
    { label: "Course", value: receipt.course },
    { label: "Amount Paid", value: receipt.amount },
    { label: "Payment Method", value: receipt.paymentMethod },
    { label: "Date", value: formatDate(receipt.date) },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral_stroke_2">
          <h2 className="text-20 font-aileron_sb text-brand_secondary">
            Receipt Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral_disabled rounded-full transition-colors"
          >
            <X size={20} className="text-brand_secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Success Icon and Message */}
          <div className="flex flex-col items-center mb-8">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_5158_45132)">
                <path
                  d="M33 15C38.3043 15 43.3914 17.1071 47.1421 20.8579C50.8929 24.6086 53 29.6957 53 35C53 40.3043 50.8929 45.3914 47.1421 49.1421C43.3914 52.8929 38.3043 55 33 55C27.6957 55 22.6086 52.8929 18.8579 49.1421C15.1071 45.3914 13 40.3043 13 35C13 29.6957 15.1071 24.6086 18.8579 20.8579C22.6086 17.1071 27.6957 15 33 15ZM30.5086 38.9457L26.0657 34.5C25.9064 34.3407 25.7174 34.2144 25.5093 34.1282C25.3011 34.042 25.0781 33.9976 24.8529 33.9976C24.6276 33.9976 24.4046 34.042 24.1965 34.1282C23.9884 34.2144 23.7993 34.3407 23.64 34.5C23.3183 34.8217 23.1376 35.2579 23.1376 35.7129C23.1376 36.1678 23.3183 36.604 23.64 36.9257L29.2971 42.5829C29.456 42.7429 29.6449 42.87 29.8531 42.9567C30.0612 43.0434 30.2845 43.0881 30.51 43.0881C30.7355 43.0881 30.9588 43.0434 31.1669 42.9567C31.3751 42.87 31.564 42.7429 31.7229 42.5829L43.4371 30.8657C43.5985 30.7071 43.7269 30.5181 43.8149 30.3096C43.9029 30.1011 43.9488 29.8773 43.9498 29.651C43.9509 29.4247 43.9071 29.2004 43.8211 28.9911C43.735 28.7818 43.6084 28.5917 43.4485 28.4315C43.2885 28.2714 43.0985 28.1446 42.8893 28.0583C42.6801 27.972 42.4559 27.928 42.2296 27.9287C42.0033 27.9295 41.7794 27.9751 41.5708 28.0629C41.3622 28.1506 41.1731 28.2788 41.0143 28.44L30.5086 38.9457Z"
                  fill="#47A025"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M33 9C39.8956 9 46.5088 11.7393 51.3848 16.6152C56.2607 21.4912 59 28.1044 59 35C59 41.8956 56.2607 48.5088 51.3848 53.3848C46.5088 58.2607 39.8956 61 33 61C26.1044 61 19.4912 58.2607 14.6152 53.3848C9.73929 48.5088 7 41.8956 7 35C7 28.1044 9.73929 21.4912 14.6152 16.6152C19.4912 11.7393 26.1044 9 33 9Z"
                  stroke="#BEECAC"
                  stroke-opacity="0.32"
                  stroke-width="12"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_5158_45132"
                  x="0"
                  y="0"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.278431 0 0 0 0 0.627451 0 0 0 0 0.145098 0 0 0 0.8 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_5158_45132"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5158_45132"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p className="mt-4 text-18 font-aileron_sb text-brand_secondary">
              Payment Successful
            </p>
          </div>

          {/* Receipt Details */}
          <div className="space-y-4 mb-8">
            {receiptDetails.map((detail, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-4 py-2"
              >
                <span className="text-16 font-aileron_sb text-brand_secondary flex-shrink-0">
                  {detail.label}:
                </span>
                <span className="text-14 font-aileron_r text-brand_secondary text-right">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-neutral_stroke_2 rounded-lg text-14 font-aileron_sb text-brand_secondary bg-white hover:bg-neutral_disabled transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (onDownload) {
                  onDownload(receipt);
                }
                onClose();
              }}
              className="flex-1 px-4 py-3 bg-brand_secondary rounded-lg text-14 font-aileron_sb text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptDetailsModal;
