export default function CookieBanner() {
  return (
    <div className="govgr-cookie-banner">
      <div className="govgr-width-container">
        <div className="govgr-main-wrapper">
          <main className="govgr-grid-column-two-thirds">
            <h3 className="govgr-heading-m">Cookies on GOV.GR</h3>
            <p className="govgr-body">
              We use some essential cookies to make this website work.
            </p>
            <p className="govgr-body">
              We’d like to set additional cookies to understand how you use
              GOV.GR, remember your settings and improve government services.
            </p>
            <p className="govgr-body">
              We also use cookies set by other sites to help us deliver content
              from their services.
            </p>
            <div className="govgr-button-group">
              <button className="govgr-btn-primary govgr-btn">
                Accept additional cookies
              </button>
              <button className="govgr-btn-primary govgr-btn">
                Reject additional cookies
              </button>
              <button className="govgr-link">View cookies</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
