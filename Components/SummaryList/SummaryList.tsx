export default function SummaryList() {
  return (
    <dl className="govgr-summary-list">
      <div className="govgr-summary-list__row">
        <dt className="govgr-summary-list__key">Όνομα</dt>
        <dd className="govgr-summary-list__value">Γιώργος Παπαδόπουλος</dd>
        <dd className="govgr-summary-list__actions">
          <a className="govgr-link" href="#">
            Αλλαγή<span className="govgr-visually-hidden"> ονόματος</span>
          </a>
        </dd>
      </div>
      <div className="govgr-summary-list__row ">
        <dt className="govgr-summary-list__key">Ημερομηνία Γέννησης</dt>
        <dd className="govgr-summary-list__value">11 Μαϊου 1990</dd>
        <dd className="govgr-summary-list__actions">
          <a className="govgr-link" href="#">
            Αλλαγή
            <span className="govgr-visually-hidden"> ημερομηνίας γέννησης</span>
          </a>
        </dd>
      </div>
      <div className="govgr-summary-list__row">
        <dt className="govgr-summary-list__key">Τηλέφωνο επικοινωνίας</dt>
        <dd className="govgr-summary-list__value">6941234567</dd>
        <dd className="govgr-summary-list__actions">
          <a className="govgr-link" href="#">
            Αλλαγή
            <span className="govgr-visually-hidden">
              {" "}
              τηλεφώνου επικοινωνίας
            </span>
          </a>
        </dd>
      </div>
    </dl>
  );
}
