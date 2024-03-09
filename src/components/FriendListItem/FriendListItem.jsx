const FriendListItem = ({ friend }) => {
  return (
    <li>
      <div>
        <img src={friend.avatar} alt='Avatar' width='48' />
        <p>{friend.name}</p>
        <p>{friend.isOnline ? "Online" : "Offline"}</p>
      </div>
    </li>
  );
};
export default FriendListItem;

// isOnline ? css.online : css.offline}
