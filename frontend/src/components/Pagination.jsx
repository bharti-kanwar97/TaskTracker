import React from 'react'
// import usePagination from "../hooks/usePagination";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount, currentPage, handlePageClick }) {
   const getMobilePages = () => {
    if (pageCount <= 3) {
      return Array.from({ length: pageCount }, (_, i) => i);
    }

    if (currentPage === 0) {
      return [0, 1, 2];
    }

    if (currentPage === pageCount - 1) {
      return [pageCount - 3, pageCount - 2, pageCount - 1];
    }

    return [currentPage, currentPage + 1, currentPage + 2];
  };

  const mobilePages = getMobilePages();
     
  return (
    <>
       {/* MOBILE */}
      <div className="flex sm:hidden items-center gap-2">

        {/* Previous */}
        <button
          disabled={currentPage === 0}
          onClick={() =>
            handlePageClick({ selected: currentPage - 1 })
          }
          className="border rounded px-3 py-2 disabled:opacity-50"
        >
          &lt;
        </button>

        {/* 3 page numbers */}
        {mobilePages.map((page) => (
          <button
            key={page}
            onClick={() =>
              handlePageClick({ selected: page })
            }
            className={`border rounded px-4 py-2 ${
              currentPage === page
                ? "bg-[#1A4560] text-white"
                : ""
            }`}
          >
            {page + 1}
          </button>
        ))}

        {/* ... */}
        {currentPage < pageCount - 3 && (
          <span className="px-2">...</span>
        )}

        {/* Next */}
        <button
          disabled={currentPage === pageCount - 1}
          onClick={() =>
            handlePageClick({ selected: currentPage + 1 })
          }
          className="border rounded px-3 py-2 disabled:opacity-50"
        >
          &gt;
        </button>

      </div>


      {/* DESKTOP */}
      <div className="hidden sm:flex">
        <ReactPaginate
          breakLabel="..."
          previousLabel={
            <span className="flex items-center gap-1">
              <span>&lt;</span>
              <span>Prev</span>
            </span>
          }
          nextLabel={
            <span className="flex items-center gap-1">
              <span>Next</span>
              <span>&gt;</span>
            </span>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-2 items-center"
          pageClassName="border rounded"
          pageLinkClassName="px-4 py-2 block"
          activeClassName="bg-[#1A4560] text-white rounded"
          previousClassName="border rounded"
          previousLinkClassName="px-4 py-2 block"
          nextClassName="border rounded"
          nextLinkClassName="px-4 py-2 block"
          breakClassName="px-3 py-2"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </>
  
  )
}

export default Pagination
