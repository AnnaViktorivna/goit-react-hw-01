import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {Array.isArray(friends) &&
        friends.map((friend) => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
    </ul>
  );
};
export default FriendList;