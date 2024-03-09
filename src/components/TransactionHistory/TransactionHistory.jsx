import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableThead}>
        <tr className={css.tableRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {Array.isArray(items) &&
          items.map((item) => {
            return (
              <tr className={css.tableRow} key={item.id}>
                <td className={css.item}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
