import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Table = ({ columns, data, renderRow, itemsPerPage = 10, showPagination = true }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  const paginatedData = useMemo(() => {
    if (!data || data.length === 0) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-neutral_stroke_2 p-8 text-center">
        <p className="text-14 font-aileron_r text-border_stroke_2">No data available</p>
      </div>
    );
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, data.length);

  return (
    <div className="bg-white rounded-lg border border-neutral_stroke_2 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral_disabled border-b border-neutral_stroke_2">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="text-14 font-aileron_sb text-brand_secondary p-4 text-left whitespace-nowrap"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => {
              const actualIndex = (currentPage - 1) * itemsPerPage + rowIndex;
              return (
                <tr
                  key={actualIndex}
                  className="border-b border-neutral_stroke_2 hover:bg-neutral_disabled transition-colors last:border-b-0"
                >
                  {renderRow(row, actualIndex)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-between p-4 border-t border-neutral_stroke_2 bg-white">
          <div className="text-14 font-aileron_r text-border_stroke_2">
            Showing {startItem} to {endItem} of {data.length} entries
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-neutral_stroke_2 hover:bg-neutral_disabled transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} className="text-brand_secondary" />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 rounded-lg text-14 font-aileron_r transition-colors ${
                        currentPage === page
                          ? "bg-brand_primary text-brand_secondary"
                          : "text-brand_secondary hover:bg-neutral_disabled"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="text-brand_secondary px-1">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-neutral_stroke_2 hover:bg-neutral_disabled transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} className="text-brand_secondary" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

