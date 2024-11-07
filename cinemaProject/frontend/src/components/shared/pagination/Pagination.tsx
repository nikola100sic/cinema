import React from 'react';
import Button from '../button/Button';
import { PaginationButton, PaginationContainer } from './Pagination.styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  // Create an array of page numbers based on the totalPages number
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage === 1} // Disable if on the first page
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Prev
      </PaginationButton>

      {pages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => handlePageClick(page)}
          isActive={page === currentPage}
        >
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        disabled={currentPage === totalPages} // Disable if on the last page
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
