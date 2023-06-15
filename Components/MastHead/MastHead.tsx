export default function MastHead() {
  return (
    <div className="govgr-masthead govgr-background-dark">
      <div className="govgr-width-container">
        <div className="govgr-main-wrapper">
          <div className="govgr-grid-column-two-thirds">
            <h1 className="govgr-heading-xl">
              Σχεδιάστε την υπηρεσία σας, με το στυλ του GOV.GR
            </h1>
            <p className="govgr-masthead-body">
              Χρησιμοποιείστε αυτόν τον οδηγό ώστε να φτιάξετε μια υπηρεσία
              συνεπή στα πρότυπα του GOV.GR. Αποκτήστε γνώση από την έρευνα και
              την εμπειρία άλλων ομάδων και αποφύγετε την επανάληψη εργασιών που
              έχουν ήδη γίνει.
            </p>
            <button className="govgr-btn govgr-btn-primary govgr-btn-cta">
              Ξεκινήστε εδώ
              <svg
                viewBox="0 0 24 24"
                className="govgr-arrow--right govgr-svg-icon"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M8.5,2L6.1,4.3l7.6,7.7l-7.6,7.6L8.5,22l10-10L8.5,2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
