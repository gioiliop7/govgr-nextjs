import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

export default function Start() {
  return (
    <div className="govgr-layout-wrapper govgr-layout-wrapper__full-height">
      <Header serviceName="My service" />
      <div className="govgr-width-container">
        <div className="govgr-phase-banner govgr-phase-banner__underline">
          <p className="govgr-phase-banner__content">
            <strong className="govgr-tag govgr-phase-banner__content__tag">
              alpha
            </strong>
            <span className="govgr-phase-banner__text">
              This is a new page – your{" "}
              <a className="govgr-link" href="#">
                comments
              </a>{" "}
              will help us improve it.
            </span>
          </p>
        </div>
      </div>
      <div className="govgr-width-container">
        <div className="govgr-main-wrapper">
          <main className="govgr-grid-column-two-thirds">
            <h1 className="govgr-heading-xl">My service</h1>
            <p className="govgr-body">Welcome to my service</p>
            <button className="govgr-btn govgr-btn-primary govgr-btn-cta">
              Start here
              <svg
                viewBox="0 0 24 24"
                className="govgr-arrow--right"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M8.5,2L6.1,4.3l7.6,7.7l-7.6,7.6L8.5,22l10-10L8.5,2z" />
              </svg>
            </button>
          </main>
          <aside className="govgr-grid-column-one-third">
            <h2 className="govgr-heading-s">Useful links</h2>
            <a className="govgr-link" href="#">
              links
            </a>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
