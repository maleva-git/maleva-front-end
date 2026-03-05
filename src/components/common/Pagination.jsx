export const Pagination = ({ currentPage, totalPages, onPageChange, hasNext, hasPrev }) => (
  <div className="flex items-center justify-between px-4 py-3 border-t">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={!hasPrev}
      className="px-3 py-1 border rounded disabled:opacity-50"
    >
      Previous
    </button>
    <span className="text-sm">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={!hasNext}
      className="px-3 py-1 border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
);
