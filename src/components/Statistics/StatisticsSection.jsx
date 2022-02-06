import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { StatisticsList } from './StatisticsList';
import statisticsData from './data.json';

export function StatisticsSection({ title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}
      <StatisticsList stats={statisticsData} />
    </section>
  );
}

StatisticsSection.propTypes = {
  title: PropTypes.string,
};
