export default function NotificationBanner() {
  return (
    <div className="govgr-phase-banner govgr-phase-banner__underline">
      <p className="govgr-phase-banner__content">
        <strong className="govgr-tag govgr-phase-banner__content__tag">
          alpha
        </strong>
        <span className="govgr-phase-banner__text">
          Αυτή είναι μία νέα υπηρεσία – τα{" "}
          <a className="govgr-link" href="#">
            σχόλιά
          </a>{" "}
          σας θα μας βοηθήσουν να τη βελτιώσουμε.
        </span>
      </p>
    </div>
  );
}
