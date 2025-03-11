import styled from "styled-components";

function MultiplePages({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </PageButton>
      {pageNumbers.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          active={currentPage === pageNumber}
        >
          {pageNumber}
        </PageButton>
      ))}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </PageButton>
    </PaginationContainer>
  );
}

export default MultiplePages;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: red; */

  margin: 20px 0;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  background-color: ${(props) => (props.active ? "#6a0dad" : "white")};
  color: ${(props) => (props.active ? "white" : "#6a0dad")};
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    cursor: not-allowed;
    /* background-color: #eee; */
    color: #999;
  }
`;
