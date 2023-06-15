import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ totalPages, page, setSearchParams, sortOption }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    const addPageNumber = (i) => {
      pageNumbers.push(
        <Button
          key={i}
          variant={`btn ${page === i ? "btn-dark" : "btn-light"}`}
          onClick={() =>
            setSearchParams({ sortOption: sortOption, page: String(i) })
          }
        >
          {i}
        </Button>
      );
    };

    const dot = () => {
      pageNumbers.push(
        <Button variant="btn btn-light" disabled>
          ...
        </Button>
      );
    };

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        addPageNumber(i);
      }
    } else {
      if (page <= 2) {
        for (let i = 1; i <= 4; i++) {
          addPageNumber(i);
        }
        dot();
      } else if (page >= totalPages - 1) {
        dot();
        for (let i = totalPages - 3; i <= totalPages; i++) {
          addPageNumber(i);
        }
      } else {
        dot();
        for (let i = page - 1; i <= page + 1; i++) {
          addPageNumber(i);
        }
        dot();
      }
    }

    return pageNumbers;
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="pagination">
        <Button
          onClick={() =>
            setSearchParams({ sortOption: sortOption, page: String(1) })
          }
          variant="btn btn-dark"
        >
          <i className="fa-solid fa-angles-left"></i>
        </Button>
        &nbsp;
        {page > 1 ? (
          <Button
            onClick={() =>
              setSearchParams({
                sortOption: sortOption,
                page: String(page - 1),
              })
            }
            variant="btn btn-dark"
          >
            <i className="fa-solid fa-angle-left"></i>
          </Button>
        ) : (
          <Button variant="btn btn-dark" disabled>
            <i className="fa-solid fa-angle-left"></i>
          </Button>
        )}
        &nbsp;
        {renderPageNumbers()}
        &nbsp;
        {page < totalPages ? (
          <Button
            variant="btn btn-dark"
            onClick={() =>
              setSearchParams({
                sortOption: sortOption,
                page: String(page + 1),
              })
            }
          >
            <i className="fa-solid fa-angle-right"></i>
          </Button>
        ) : (
          <Button variant="btn btn-dark" disabled>
            <i className="fa-solid fa-angle-right"></i>
          </Button>
        )}
        &nbsp;
        <Button
          onClick={() =>
            setSearchParams({
              sortOption: sortOption,
              page: String(totalPages),
            })
          }
          className="btn btn-dark"
        >
          <i className="fa-solid fa-angles-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
