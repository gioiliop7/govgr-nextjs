export default function ErrorMessage() {
  return (
    <div className="govgr-field govgr-field__error">
      <fieldset className="govgr-fieldset">
        <legend
          role="heading"
          aria-level={1}
          className="govgr-fieldset__legend govgr-heading-l"
        >
          Ποιά είναι η ημερομηνία γέννησης σας;
        </legend>
        <p className="govgr-hint">Για παράδειγμα, 05 11 2020</p>
        <p className="govgr-error-message">
          <span className="govgr-visually-hidden">Λάθος:</span>Η ημερομηνία
          γέννησης πρέπει να έχει έτος.
        </p>
        <div className="govgr-date-input">
          <div className="govgr-date-input__item">
            <label className="govgr-label">
              Ημέρα
              <input
                className="govgr-input govgr-input--width-2"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                name="b-day"
                autoComplete="bday-day"
              />
            </label>
          </div>
          <div className="govgr-date-input__item">
            <label className="govgr-label">
              Μήνας
              <input
                className="govgr-input govgr-input--width-2"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                name="b-month"
                autoComplete="bday-month"
              />
            </label>
          </div>
          <div className="govgr-date-input__item">
            <label className="govgr-label">
              Έτος
              <input
                className="govgr-input govgr-input--width-4 govgr-error-input"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                name="b-year"
                autoComplete="bday-year"
              />
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
