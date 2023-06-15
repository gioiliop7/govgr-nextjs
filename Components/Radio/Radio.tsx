export default function Radio() {
  return (
    <div className="govgr-field">
      <fieldset className="govgr-fieldset" aria-describedby="radio-country">
        <legend
          role="heading"
          aria-level={1}
          className="govgr-fieldset__legend govgr-heading-l"
        >
          Ποια είναι η χώρα της διαμονής σας;
        </legend>
        <div className="govgr-radios">
          <div className="govgr-radios__item">
            <label className="govgr-label govgr-radios__label">
              Ελλάδα
              <input
                className="govgr-radios__input"
                type="radio"
                name="country"
                value="greece"
              />
            </label>
          </div>
          <div className="govgr-radios__item">
            <label className="govgr-label govgr-radios__label">
              Κύπρος
              <input
                className="govgr-radios__input"
                type="radio"
                name="country"
                value="cyprus"
              />
            </label>
          </div>
          <div className="govgr-radios__item">
            <label className="govgr-label govgr-radios__label">
              Χώρα της Ευρωπαϊκής Ένωσης
              <input
                className="govgr-radios__input"
                type="radio"
                name="country"
                value="eu"
              />
            </label>
          </div>
          <div className="govgr-radios__item">
            <label className="govgr-label govgr-radios__label">
              Ηνωμένες Πολιτείες της Αμερικής
              <input
                className="govgr-radios__input"
                type="radio"
                name="country"
                value="usa"
              />
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
