export default function Table() {
  return (
    <table className="govgr-table">
      <caption className="govgr-table__caption--m govgr-table__caption">
        Περίοδος και ποσά
      </caption>
      <thead className="govgr-table__head">
        <tr className="govgr-table__row">
          <th className="govgr-table__header" scope="col">
            Περίοδος
          </th>
          <th className="govgr-table__header" scope="col">
            Κανονικό ποσό
          </th>
          <th className="govgr-table__header" scope="col">
            Μειωμένο ποσό
          </th>
        </tr>
      </thead>
      <tbody className="govgr-table__body">
        <tr className="govgr-table__row">
          <td className="govgr-table__cell">Πρώτες 6 εβδομάδες</td>
          <td className="govgr-table__cell">€109.80 / εβδομάδα</td>
          <td className="govgr-table__cell">€69.80 / εβδομάδα</td>
        </tr>
        <tr className="govgr-table__row">
          <td className="govgr-table__cell">Επόμενες 33 εβδομάδες</td>
          <td className="govgr-table__cell">€109.80 / εβδομάδα</td>
          <td className="govgr-table__cell">€69.80 / εβδομάδα</td>
        </tr>
        <tr className="govgr-table__row">
          <td className="govgr-table__cell">Συνολικό ποσό</td>
          <td className="govgr-table__cell">€4.282,20</td>
          <td className="govgr-table__cell">€3.282,20</td>
        </tr>
      </tbody>
    </table>
  );
}
