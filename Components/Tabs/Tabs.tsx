import React, { useState } from "react";

function Tabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="govgr-tabs">
      <h6 className="govgr-heading-s govgr-tabs__title">Περιεχόμενα</h6>
      <ul className="govgr-tabs__list" role="tablist">
        <li
          className={`govgr-tabs__list-item ${
            activeTab === "tab1" ? "govgr-tabs__list-item-selected" : ""
          }`}
          role="presentation"
        >
          <a
            className="govgr-tabs__tab"
            href="#user-details"
            id="tab_user-details"
            role="tab"
            aria-controls="past-week"
            aria-selected={activeTab === "tab1" ? "true" : "false"}
            tabIndex={-1}
            onClick={() => handleTabClick("tab1")}
          >
            Στοιχεία πολίτη
          </a>
        </li>
        <li
          className={`govgr-tabs__list-item ${
            activeTab === "tab2" ? "govgr-tabs__list-item-selected" : ""
          }`}
          role="presentation"
        >
          <a
            className="govgr-tabs__tab"
            href="#user-cases"
            id="tab_user-cases"
            role="tab"
            aria-controls="user-cases"
            aria-selected={activeTab === "tab2" ? "true" : "false"}
            tabIndex={-1}
            onClick={() => handleTabClick("tab2")}
          >
            Οι υποθέσεις τους
          </a>
        </li>
        <li
          className={`govgr-tabs__list-item ${
            activeTab === "tab3" ? "govgr-tabs__list-item-selected" : ""
          }`}
          role="presentation"
        >
          <a
            className="govgr-tabs__tab"
            href="#history"
            id="tab_history"
            role="tab"
            aria-controls="history"
            aria-selected={activeTab === "tab3" ? "true" : "false"}
            tabIndex={-1}
            onClick={() => handleTabClick("tab3")}
          >
            Ιστορικό
          </a>
        </li>
      </ul>
      <div
        id="tab1"
        className={`govgr-tabs__panel ${
          activeTab === "tab1" ? "govgr-tabs__panel-visible" : ""
        }`}
      >
        <h3 className="govgr-heading-l">Στοιχεία πολίτη</h3>
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
                <span className="govgr-visually-hidden">
                  {" "}
                  ημερομηνίας γέννησης
                </span>
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
      </div>
      <div
        id="tab2"
        className={`govgr-tabs__panel ${
          activeTab === "tab2" ? "govgr-tabs__panel-visible" : ""
        }`}
      >
        <h3 className="govgr-heading-m">παράδειγμα 2</h3>
        <p>
          It can take up to 8 weeks to register a lasting power of attorney if
          there are no mistakes in the application.
        </p>
      </div>
      <div
        id="tab3"
        className={`govgr-tabs__panel ${
          activeTab === "tab3" ? "govgr-tabs__panel-visible" : ""
        }`}
      >
        <h3 className="govgr-heading-m">άλλο παράδειγμα</h3>
        <p>
          It can take up to 8 weeks to register a lasting power of attorney if
          there are no mistakes in the application.
        </p>
      </div>
    </div>
  );
}

export default Tabs;
