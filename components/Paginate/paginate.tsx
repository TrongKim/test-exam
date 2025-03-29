'use client';
import React from 'react';
import ReactPaginate from 'react-paginate';
interface Props {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
}

export const Paginate = ({ pageCount, onPageChange }: Props) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Trang kế tiếp →"
            onPageChange={onPageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="← Trang trước"
            containerClassName="flex items-center justify-center w-full gap-2 mt-4 text-[#809FB8]"
            pageClassName="rounded-[8px] text-[#052B1E] text-[16px] font-semibold pt-[8px] pb-[8px] pr-[16px] pl-[16px] cursor-pointer pointer-events-auto"
            activeClassName="bg-[#D1F7EA] text-[#052B1E]"
            previousClassName="mr-[auto] flex items-center gap-2 text-[16px] font-semibold leading-[150%] text=[#4D5F6E] cursor-pointer pointer-events-auto"
            nextClassName="ml-[auto] flex items-center gap-2 text-[16px] font-semibold leading-[150%] text=[#4D5F6E] cursor-pointer pointer-events-auto"
            breakClassName="px-3 py-2"
            disabledClassName="text-[#B3C5D4] cursor-not-allowed"
        />
    )
}
