export default function TextInput() {
    return (
      <div className="govgr-field">
        <label className="govgr-label">
          <span role="heading" aria-level="1" className="govgr-heading-m">Όνομα επιχείρησης</span>
          <input className="govgr-input" type="text" name="business-name" />
        </label>
      </div>
    );
  }