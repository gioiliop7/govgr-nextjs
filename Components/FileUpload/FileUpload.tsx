export default function FileUpload() {
  return (
    <fieldset className="govgr-fieldset">
      <legend className="govgr-fieldset__legend govgr-heading-m">
        Λογότυπο επιχείρησης
      </legend>
      <p className="govgr-hint">Πρέπει να συμπληρώσετε το πεδίο.</p>
      <label
        className="govgr-label-file govgr-btn govgr-btn-secondary"
        tabIndex={0}
        role="button"
      >
        <input className="govgr-file-input" type="file" />
        Επιλογή αρχείου
      </label>
    </fieldset>
  );
}
