import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import s from './FriendList.module.css';

export function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
