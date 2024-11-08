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

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Prev
      </PaginationButton>

      {pages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => handlePageClick(page)}
          $isActive={page === currentPage}
        >
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
