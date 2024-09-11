import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React from "react";

const MyService = () => {
  return (
    <div className="govgr-layout-wrapper">
      <Header />
      <div className="govgr-width-container">
        <div className="govgr-phase-banner govgr-phase-banner--underline"></div>
      </div>
      <div className="govgr-width-container">
        <div className="govgr-main-wrapper">
          <main className="govgr-grid-column-two-thirds">
            <a href="#" className="govgr-back-link">
              <svg
                className="govgr-svg-icon--caret--left"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18,22V2L6,12L18,22z" />
              </svg>
              Πίσω
            </a>
            <form noValidate>
              <div className="govgr-field">
                <fieldset
                  className="govgr-fieldset"
                  aria-describedby="radiohint"
                >
                  <legend
                    role="heading"
                    aria-level={1}
                    className="govgr-legend govgr-heading-xl"
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
                          name="radio-option1"
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
                          name="radio-option1"
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
                          name="radio-option1"
                          value="eu"
                        />
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <button className="govgr-btn govgr-btn-primary">Συνέχεια</button>
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyService;
