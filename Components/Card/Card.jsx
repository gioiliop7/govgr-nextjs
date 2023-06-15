export default function Card() {
  return (
    <div className="govgr-card">
      <div className="govgr-card__body">
        <div role="heading" aria-level="2" className="govgr-card__heading">
          Γεωργία και κτηνοτροφία
        </div>
        <div className="govgr-card__text">
          Διαδικασίες, επιδοτήσεις και αποζημιώσεις για την γεωργική,
          κτηνοτροφική ή αλιευτική σας δραστηριότητα.
        </div>
        <div className="govgr-card__action">
          <button className="govgr-btn-primary govgr-btn">Συνέχεια</button>
        </div>
      </div>
    </div>
  );
}
