export default function NotificationBanner() {
  return (
    <div
      className="govgr-notification-banner"
      role="region"
      aria-labelledby="govgr-notification-banner-title"
      data-module="govgr-notification-banner"
    >
      <div className="govgr-notification-banner__header">
        <h2
          className="govgr-notification-banner__title"
          id="govgr-notification-banner-title"
        >
          Σημαντικό
        </h2>
      </div>
      <div className="govgr-notification-banner__content">
        <p className="govgr-notification-banner__heading">
          Έχετε 7 ημέρες για να υποβάλετε την αίτηση. <br />
          <a className="govgr-notification-banner__link" href="#">
            Προβολή αίτησης
          </a>
        </p>
      </div>
    </div>
  );
}
