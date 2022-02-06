import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import s from './Transaction.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(item => (
          <tr key={item.id} className={s.row}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
