import React from 'react'
// import usePagination from "../hooks/usePagination";
import ReactPaginate from "react-paginate";

function Pagination({handlePageClick,pageCount}) {
   
     
  return (
    <>
      <div className='sm:hidden'>
      <ReactPaginate
    breakLabel="..."
     previousLabel={
    <span className="flex items-center gap-1">
      <span>&lt;</span>
      <span className="hidden sm:inline">Prev</span>
    </span>
  }
  nextLabel={
    <span className="flex items-center gap-1">
      <span className="hidden sm:inline">Next</span>
      <span>&gt;</span>
    </span>
  }
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    marginPagesDisplayed={0}
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
      <div className="hidden sm:block">
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
          pageRangeDisplayed={5}
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
