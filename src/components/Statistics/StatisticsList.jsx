import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function StatisticsList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={s.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <StatisticsItem label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
