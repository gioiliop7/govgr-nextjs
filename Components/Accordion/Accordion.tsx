import React from "react";

function Accordion() {
  return (
    <>
      <div className="govgr-accordion w-full">
        <details className="govgr-accordion__section">
          <summary className="govgr-accordion__section-summary">
            <h2 className="govgr-accordion__section-heading">
              <span className="govgr-accordion__section-button">
                Διαφορές με το δημόσιο
              </span>
            </h2>
          </summary>
          <div className="govgr-accordion__section-content">
            <p className="govgr-body">
              Παρακάτω μπορείτε να δείτε την διαθέσιμη και ενεργή υπηρεσία που
              αφορά το επιλεγμένο γεγονός ζωής.
            </p>
            <ul className="govgr-list">
              <li>
                <a className="govgr-link">
                  {" "}
                  Αίτηση εξώδικης αναγνώρισης απαιτήσεων / συμβιβαστικής
                  επίλυσης διαφορών με το Δημόσιο{" "}
                </a>
              </li>
            </ul>
          </div>
        </details>
        <details className="govgr-accordion__section" open>
          <summary className="govgr-accordion__section-summary">
            <h2 className="govgr-accordion__section-heading">
              <span className="govgr-accordion__section-button">
                Δικαστήρια
              </span>
            </h2>
          </summary>
          <div className="govgr-accordion__section-content">
            <p className="govgr-body">
              Στη λίστα παρακάτω μπορείτε να δείτε τις υπηρεσίες που αφορούν το
              επιλεγμένο γεγονός ζωής, κατηγοριοποιημένες σε ομάδες υπηρεσιών.
            </p>
            <ul className="govgr-list">
              <li>
                <a className="govgr-link">
                  {" "}
                  Ενιαίο πιστοποιητικό δικαστικής φερεγγυότητας{" "}
                </a>
              </li>
              <li>
                <a className="govgr-link">
                  {" "}
                  Ηλεκτρονικές δικαστικές αποφάσεις{" "}
                </a>
              </li>
              <li>
                <a className="govgr-link"> Πιστοποιητικά δικαστηρίων </a>
              </li>
            </ul>
          </div>
        </details>
        <details className="govgr-accordion__section">
          <summary className="govgr-accordion__section-summary">
            <h2 className="govgr-accordion__section-heading">
              <span className="govgr-accordion__section-button">Δικόγραφα</span>
            </h2>
          </summary>
          <div className="govgr-accordion__section-content">
            <p className="govgr-body">
              Στη λίστα παρακάτω μπορείτε να δείτε τις υπηρεσίες που αφορούν το
              επιλεγμένο γεγονός ζωής.
            </p>
            <ul className="govgr-list">
              <li>
                <a className="govgr-link"> Αντίγραφο πρακτικών υπόθεσης </a>
              </li>
              <li>
                <a className="govgr-link">
                  {" "}
                  Ηλεκτρονική κατάθεση δικογράφων (Πολιτικά / Ποινικά
                  Δικαστήρια){" "}
                </a>
              </li>
            </ul>
          </div>
        </details>
        <details className="govgr-accordion__section">
          <summary className="govgr-accordion__section-summary">
            <h2 className="govgr-accordion__section-heading">
              <span className="govgr-accordion__section-button">
                Καταστήματα κράτησης
              </span>
            </h2>
          </summary>
          <div className="govgr-accordion__section-content">
            <p className="govgr-body">
              Στη λίστα παρακάτω μπορείτε να δείτε τις υπηρεσίες που αφορούν το
              επιλεγμένο γεγονός ζωής.
            </p>
            <ul className="govgr-list">
              <li>
                <a className="govgr-link">
                  {" "}
                  Βεβαίωση ηθικού / πειθαρχικού ελέγχου αποφυλακισμένων{" "}
                </a>
              </li>
              <li>
                <a className="govgr-link"> Εκπαίδευση αποφυλακισμένων </a>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </>
  );
}

export default Accordion;
