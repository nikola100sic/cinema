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

  const pages = Array.from({ length: totalPages }, (_, index) => index);

  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage === 0}
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
          {page + 1}
        </PaginationButton>
      ))}

      <PaginationButton
        disabled={currentPage === totalPages - 1}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
