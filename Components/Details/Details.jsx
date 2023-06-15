export default function Details() {
  return (
    <details className="govgr-details">
      <summary className="govgr-details__summary">
        Βοήθεια με διεύθυνση κατοικίας
      </summary>
      <div className="govgr-details__summary-text">
        <p className="govgr-body">
          Χρειάζεται να γνωρίζουμε τη διεύθυνση κατοικίας σας ώστε να μπορούμε
          να σας στείλουμε τα έντυπα μέσω ταχυδρομείου. Σε περίπτωση που δεν
          μπορείτε να παρέχετε μια έγκυρη διεύθυνση κατοικίας, παρακαλούμε
          επικοινωνήστε μαζί μας.
        </p>
      </div>
    </details>
  );
}
