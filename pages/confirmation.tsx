import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Image from "next/image";
import qrCode from "../assets/qrcode.png"

export default function Confirmation() {
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
            <div className="govgr-panel govgr-panel--confirmation">
              <h1 className="govgr-panel__title">
                The form was submitted successfully
              </h1>
              <div className="govgr-panel__body">
                The confirmation code is:<strong>HDJ2123F</strong>
              </div>
            </div>
            <p>
              The accuracy of the information submitted with this statement can
              be verified based on the file.
            </p>
          </main>
          <aside className="govgr-grid-column-one-third">
            <Image
              src={qrCode}
              width="200"
              height="200"
              alt="qrcode image"
            />
            <h2 className="govgr-heading-s">Confirmation code</h2>
            <hr className="govgr-section-break govgr-section-break--visible" />
            <p>uHDJ2123F</p>
            <h2 className="govgr-heading-s">Status</h2>
            <hr className="govgr-section-break govgr-section-break--visible" />
            <p>The document was issued</p>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
