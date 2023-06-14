import hr from "../../assets/hr.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="govgr-bottom">
        <footer className="govgr-footer">
          <div className="govgr-width-container">
            <div className="govgr-footer__meta">
              <div className="govgr-footer__meta-item govgr-footer__meta-item--grow">
                <div className="govgr-footer__content">
                  <div className="govgr-footer__licence-description">
                    <p>Giorgos Iliopoulos Next.js edition</p>
                  </div>
                </div>
              </div>
              <div className="govgr-footer__meta-item">
                <Image
                  className="govgr-footer__government-logo"
                  src={hr}
                  alt="Hellenic Republic Logo"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
