export default function AdditionalInfo() {
  return (
    <div className="govgr-field">
      <label className="govgr-label">
        <span role="heading" aria-level={1} className="govgr-heading-m">
          Μπορείτε να δώσετε περισσότερες πληροφορίες;
        </span>
        <p className="govgr-hint">
          Στις πληροφορίες μην προσθέσετε προσωπικά ή οικονομικά δεδομένα, όπως
          το ΑΜΑ ή δεδομένα πιστωτικής κάρτας.
        </p>
        <textarea className="govgr-textarea" name="ta" rows={6}></textarea>
      </label>
    </div>
  );
}
