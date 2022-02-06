import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export function FriendItem({ avatar, name, isOnline }) {
  const spanStyle = isOnline === true ? s.online : s.offline;

  return (
    <>
      <span className={spanStyle}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
