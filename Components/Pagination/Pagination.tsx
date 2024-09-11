import React from "react";

const Pagination = () => {
  return (
    <nav className="govgr-pagination">
      <p className="govgr-pagination__label">
        Εμφανίζονται <b>10</b> έως <b>20</b> από <b>30</b> αποτελέσματα
      </p>
      <ul className="govgr-pagination__list">
        <li className="govgr-pagination__item govgr-pagination__item--inactive">
          <a className="govgr-link" href="#">
            <svg
              aria-hidden="true"
              className="govgr-svg-icon govgr-svg-icon--arrow--left"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path d="M14.8,22l2.4-2.3L9.6,12l7.6-7.6L14.8,2l-10,10L14.8,22z" />
            </svg>
            Προηγούμενο
            <span className="govgr-visually-hidden"> σύνολο αποτελεσμάτων</span>
          </a>
        </li>
        <li className="govgr-pagination__item govgr-pagination__item--current">
          1
        </li>
        <li className="govgr-pagination__item">
          <a className="govgr-link" href="/page=1">
            2
          </a>
        </li>
        <li className="govgr-pagination__item">
          <a className="govgr-link" href="/page=3">
            3
          </a>
        </li>
        <li className="govgr-pagination__item govgr-pagination__item--dots">
          ...
        </li>
        <li className="govgr-pagination__item">
          <a className="govgr-link" href="/page=5">
            5
          </a>
        </li>
        <li className="govgr-pagination__item">
          <a className="govgr-link" href="#">
            Επόμενο
            <span className="govgr-visually-hidden"> σύνολο αποτελεσμάτων</span>
            <svg
              aria-hidden="true"
              className="govgr-svg-icon govgr-svg-icon--arrow--right"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path d="M8.5,2L6.1,4.3l7.6,7.7l-7.6,7.6L8.5,22l10-10L8.5,2z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
