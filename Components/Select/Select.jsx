export default function Select() {
    return (
      <div className="govgr-field">
        <label className="govgr-label">
          Ταξινόμηση
          <select className="govgr-select" name="select-list">
            <option value="popular">Δημοφιλή</option>
            <option value="recently" selected>Πρόσφατα</option>
            <option value="three">Περισσότερες προβολές</option>
            <option value="four">Περισσότερα σχόλια</option>
          </select>
        </label>
      </div>
    );
  }