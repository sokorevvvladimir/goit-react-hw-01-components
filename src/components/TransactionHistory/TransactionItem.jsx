import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
