import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

const ErrorPage = () => {
  return (
    <div className="govgr-layout-wrapper min-h-[100vh]">
      <div className="govgr-top">
        <Header />
      </div>
      <div className="govgr-width-container">
      </div>
      <div className="govgr-width-container">
        <div className="govgr-main-wrapper">
          <main className="govgr-grid-column-two-thirds">
            <h1 className="govgr-heading-xl">
              We are sorry, an error occurred
            </h1>
            <p className="govgr-body">
              There was a technical problem. Please try again later.
            </p>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
