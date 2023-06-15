export default function NavigationList() {
  return (
    <>
      <svg
        className="govgr-burger-icon"
        focusable="true"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect id="govgr-burger-icon__line-1" width="20" height="3.3" />
        <rect id="govgr-burger-icon__line-2" width="20" height="3.3" />
        <rect id="govgr-burger-icon__line-3" width="20" height="3.3" />
      </svg>
      <nav className="govgr-nav--horizontal">
        <ul className="govgr-nav__list">
          <li className="govgr-nav__list-item">
            <a
              href="#"
              className="govgr-nav__list-item-link govgr-nav__list-item-link--active govgr-link"
            >
              Αρχική
            </a>
          </li>
          <li className="govgr-nav__list-item">
            <a href="#" className="govgr-nav__list-item-link govgr-link">
              Καταχώρηση φόρμας
            </a>
          </li>
          <li className="govgr-nav__list-item">
            <a href="#" className="govgr-nav__list-item-link govgr-link">
              Νέα
            </a>
          </li>
          <li className="govgr-nav__list-item">
            <a href="#" className="govgr-nav__list-item-link govgr-link">
              Επικοινωνία
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
