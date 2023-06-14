export default function Breadcrumbs() {
  return (
    <>
      <div className="govgr-breadcrumbs">
        <ol className="govgr-breadcrumbs__list">
          <li className="govgr-breadcrumbs__list-item">
            <a className="govgr-breadcrumbs__link" href="#">
              Αρχική
            </a>
          </li>
          <li className="govgr-breadcrumbs__list-item">
            <a className="govgr-breadcrumbs__link" href="#">
              Υγεία και πρόνοια
            </a>
          </li>
          <li className="govgr-breadcrumbs__list-item">
            <a className="govgr-breadcrumbs__link" href="#">
              Φάκελος υγείας
            </a>
          </li>
          <li className="govgr-breadcrumbs__list-item">
            <a className="govgr-breadcrumbs__link" href="#">
              Άυλη συνταγογράφηση
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
