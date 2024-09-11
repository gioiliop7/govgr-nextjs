import React from "react";

const ConfirmationCodeInput = () => {
  return (
    <div className="govgr-field">
      <fieldset className="govgr-fieldset">
        <legend
          className="govgr-fieldset__legend govgr-heading-lg"
          role="heading"
          aria-level={1}
        >
          Κωδικός Επιβεβαίωσης
        </legend>
        <p className="govgr-hint">
          Εισάγετε τον μοναδικό κωδικό που λάβατε στο ηλεκτρονικό σας
          ταχυδρομείο
        </p>
        <div className="govgr-single-character-input--container">
          <input
            className="govgr-otp-input__item govgr-input govgr-otp-input--width"
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            inputMode="numeric"
            name="first-digit"
          />
          <input
            className="govgr-otp-input__item govgr-input govgr-otp-input--width"
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            inputMode="numeric"
            name="second-digit"
          />
          <input
            className="govgr-otp-input__item govgr-input govgr-otp-input--width"
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            inputMode="numeric"
            name="third-digit"
          />
          <input
            className="govgr-otp-input__item govgr-input govgr-otp-input--width"
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            inputMode="numeric"
            name="forth-digit"
          />
          <input
            className="govgr-otp-input__item govgr-input govgr-otp-input--width"
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            inputMode="numeric"
            name="fifth-digit"
          />
          <input
            className="govgr-otp-input__item govgr-input govgr-otp-input--width"
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            inputMode="numeric"
            name="sixth-digit"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default ConfirmationCodeInput;
