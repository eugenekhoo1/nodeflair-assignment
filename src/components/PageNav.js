import "../styles/pageNav.css";
import { getPageNumbers } from "../lib/utils";

export default function PageNav({ page, maxPage }) {
  const pageNumbers = getPageNumbers(page, maxPage);

  return (
    <nav>
      {console.log(pageNumbers, maxPage)}
      <div className="nav-text">
        <span>
          Page <b>{page}</b> of <b>{maxPage}</b>
        </span>
      </div>
      <div className="nav-bar">
        <ul className="pagination">
          <li
            className="page-item"
            style={{ display: page === 1 ? "none" : "" }}
          >
            <a
              className="page-link"
              href="/1"
              aria-label="Go to first page"
            >{`<<`}</a>
          </li>
          <li
            className="page-item"
            style={{ display: page === 1 ? "none" : "" }}
          >
            <a
              className="page-link"
              href={`/${page - 1}`}
              aria-label="Go to previous page"
            >{`<`}</a>
          </li>
          {pageNumbers.map((pageNum) => (
            <li
              className="page-item"
              key={pageNum}
              style={{
                backgroundColor: pageNum === page ? "#1fc76a" : "",
              }}
            >
              <a
                className="page-link"
                href={`/${pageNum}`}
                aria-label={`Go to page ${pageNum}`}
                style={{ color: pageNum === page ? "white" : "" }}
              >
                {pageNum.toString()}
              </a>
            </li>
          ))}
          <li
            className="page-item"
            style={{ display: page === maxPage ? "none" : "" }}
          >
            <a
              className="page-link"
              href={`/${page + 1}`}
              aria-label="Go to next page"
            >{`>`}</a>
          </li>
          <li
            className="page-item"
            style={{ display: page === maxPage ? "none" : "" }}
          >
            <a
              className="page-link"
              href={`/${maxPage}`}
              aria-label="Go to last page"
            >{`>>`}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
