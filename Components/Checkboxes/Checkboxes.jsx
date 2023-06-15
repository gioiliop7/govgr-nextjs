export default function Checkboxes() {
  return (
    <div className="govgr-field">
      <fieldset className="govgr-fieldset">
        <legend
          role="heading"
          aria-level="1"
          className="govgr-fieldset__legend govgr-heading-l"
        >
          Πώς αισθάνεται αυτή τη στιγμή;
        </legend>
        <p className="govgr-hint">
          Πείτε μας σχετικά με πρόσφατες αλλαγές. Επιλέξτε ό,τι ισχύει.
        </p>
        <div className="govgr-checkboxes">
          <div className="govgr-checkboxes__item">
            <label className="govgr-label govgr-checkboxes__label">
              Έχω συνάχι
              <input
                className="govgr-checkboxes__input"
                type="checkbox"
                name="runny-nose"
                value="runny-nose"
              />
            </label>
          </div>
          <div className="govgr-checkboxes__item">
            <label className="govgr-label govgr-checkboxes__label">
              Έχω πυρετό
              <input
                className="govgr-checkboxes__input"
                type="checkbox"
                name="fever"
                value="fever"
              />
            </label>
          </div>
          <div className="govgr-checkboxes__item">
            <label className="govgr-label govgr-checkboxes__label">
              Αισθάνομαι κούραση
              <input
                className="govgr-checkboxes__input"
                type="checkbox"
                name="tiredness"
                value="tiredness"
              />
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
