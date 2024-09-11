import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function Login() {
  return (
    <div className="govgr-layout-wrapper govgr-layout-wrapper__full-height">
      <Header />
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
            <h1 className="govgr-heading-xl">Identification required</h1>
            <p className="govgr-body">
              You need to login in order to continue.
            </p>
            <button className="govgr-btn govgr-btn-primary govgr-btn-cta">
              Login
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
