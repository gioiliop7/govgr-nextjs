import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function Error404() {
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
            <h1 className="govgr-heading-xl">Page not found</h1>
            <p className="govgr-body">
              If you have entered the page address, check that it is correct.
            </p>
            <p className="govgr-body">
              If you have pasted the page address, check that you have copied
              the entire address.
            </p>
            <p className="govgr-body">
              If the page address is correct or you have selected a link or
              button, contact the service helpdesk in case you need help.
            </p>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
