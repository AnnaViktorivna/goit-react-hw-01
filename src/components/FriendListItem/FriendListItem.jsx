import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  const isFriendOnlineCheck = friend.isOnline === false;
  return (
    <li className={css.friendItem}>
      <div className={css.wrapFriendsInfo}>
        <img
          className={css.friendAvatar}
          src={friend.avatar}
          alt='Avatar'
          width='48'
        />
        <p className={css.friendName}>{friend.name}</p>
        <p
          className={clsx(css.friendIsOnline, {
            [css.friendIsOffline]: isFriendOnlineCheck,
          })}
        >
          {friend.isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};
export default FriendListItem;
