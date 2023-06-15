import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function CookiesPage() {
  return (
    <div className="govgr-layout-wrapper">
      <Header />
      <div className="govgr-width-container">
        <div className="govgr-main-wrapper">
          <main className="govgr-grid-column-two-thirds">
            <h1 className="govgr-heading-xl">Cookies on GOV.GR</h1>
            <p className="govgr-body">
              Cookies are files saved on your phone, tablet, or computer when
              you visit a website.
            </p>
            <p className="govgr-body">
              We use cookies to collect and store information about how you use
              the GOV.GR website and government digital services, such as the
              pages you visit. {`'Government`} digital {`services'`} means any page with
              services.gov.gr in the URL.
            </p>
            <p className="govgr-body">
              This page has a brief explanation of each type of cookie we use.
              If you want more details, read our detailed cookie information.
            </p>

            <h2 className="govgr-heading-l">Cookies settings</h2>
            <p className="govgr-body">
              We use 4 types of cookies. You can choose which cookies {`you're`}
              happy for us to use.
            </p>

            <div className="govgr-field">
              <fieldset className="govgr-fieldset">
                <legend className="govgr-heading-m govgr-fieldset__legend">
                  Cookies that measure website use
                </legend>
                <p className="govgr-hint">
                  We use Google Analytics cookies to measure how you use GOV.GR
                  and government digital services.
                </p>
                <p className="govgr-hint">
                  These cookies collect information about:
                </p>
                <ol className="govgr-list--bullet govgr-list">
                  <li className="govgr-list__item">
                    <p className="govgr-hint">how you got to these sites</p>
                  </li>
                  <li className="govgr-list__item">
                    <p className="govgr-hint">
                      the pages you visit and how long you spend on each page
                    </p>
                  </li>
                  <li className="govgr-list__item">
                    <p className="govgr-hint">
                      what you click on while {`you're`} visiting these sites
                    </p>
                  </li>
                </ol>
                <p className="govgr-hint">
                  We also use LUX Real User Monitoring software cookies from
                  SpeedCurve to measure your web performance experience while
                  visiting GOV.GR.
                </p>
                <p className="govgr-hint">
                  LUX software cookies collect and store information about how
                  well pages performed on your device, including whether there
                  were any performance bottlenecks or JavaScript errors.
                </p>
                <p className="govgr-hint">
                  We do not allow Google or SpeedCurve to use or share the data
                  about how you use these sites.
                </p>
                <hr className="govgr-section-break" />
                <div className="govgr-radios">
                  <div className="govgr-radios__item">
                    <label className="govgr-label govgr-radios__label">
                      Use cookies that measure my website use
                      <input
                        type="radio"
                        name="measure-use"
                        value="use-measure-cookies"
                        className="govgr-radios__input"
                      />
                    </label>
                  </div>
                  <div className="govgr-radios__item">
                    <label className="govgr-label govgr-radios__label">
                      Do not use cookies that measure my website use
                      <input
                        type="radio"
                        name="measure-use"
                        value="do-not-use-measure-cookies"
                        className="govgr-radios__input"
                        checked
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
              <hr className="govgr-section-break" />
              <fieldset className="govgr-fieldset">
                <legend className="govgr-heading-m govgr-fieldset__legend">
                  Cookies that help with our communications and marketing
                </legend>
                <p className="govgr-hint">
                  These cookies may be set by third-party websites and do things
                  like measure how you view YouTube videos that are on GOV.GR.
                </p>
                <div className="govgr-radios">
                  <div className="govgr-radios__item">
                    <label className="govgr-label govgr-radios__label">
                      Use cookies that help with communications and marketing
                      <input
                        type="radio"
                        name="communication-use"
                        value="use-communication-cookies"
                        className="govgr-radios__input"
                      />
                    </label>
                  </div>
                  <div className="govgr-radios__item">
                    <label className="govgr-label govgr-radios__label">
                      Do not use cookies that help with communications and
                      marketing
                      <input
                        type="radio"
                        name="communication-use"
                        value="do-not-use-communication-cookies"
                        className="govgr-radios__input"
                        checked
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
              <hr className="govgr-section-break" />
              <fieldset className="govgr-fieldset">
                <legend className="govgr-heading-m govgr-fieldset__legend">
                  Cookies that remember your settings
                </legend>
                <p className="govgr-hint">
                  These cookies do things like remember your preferences and the
                  choices you make to personalize your experience of using the
                  site.
                </p>
                <div className="govgr-radios">
                  <div className="govgr-radios__item">
                    <label className="govgr-label govgr-radios__label">
                      Use cookies that remember my settings on the site
                      <input
                        type="radio"
                        name="settings-cookies"
                        value="use-settings-cookies"
                        className="govgr-radios__input"
                      />
                    </label>
                  </div>
                  <div className="govgr-radios__item">
                    <label className="govgr-label govgr-radios__label">
                      Do not use cookies that remember my settings on the site
                      <input
                        type="radio"
                        name="settings-cookies"
                        value="do-not-use-settings-cookies"
                        className="govgr-radios__input"
                        checked
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
              <hr className="govgr-section-break" />
              <h2 className="govgr-heading-l">
                Strictly necessary cookies
              </h2>
              <p className="govgr-body">
                These essential cookies do things like remember your progress
                through a form (for example, a license application). They always
                need to be on.
              </p>
              <button className="govgr-btn-primary govgr-btn">
                Save changes
              </button>
            </div>

            <h2 className="govgr-heading-l">Government services</h2>
            <p className="govgr-body">
              Government digital services are run by different government
              departments, such as the Department for Work and Pensions (DWP)
              and HM Revenues and Customs (HMRC).
            </p>
            <p className="govgr-body"></p>
            <h2 className="govgr-heading-l">Cookies settings</h2>
            <p className="govgr-body">
              These services may set additional cookies and, if so, will have
              their own cookie policy and banner linking to it.
            </p>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
