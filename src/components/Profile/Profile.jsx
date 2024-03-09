import "./Profile.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className='wrap'>
      {" "}
      <div className='wrapUserInfo'>
        {" "}
        <img className='wrapUserInfoImg' src={image} alt='User avatar' />
        <p className='wrapUserInfoName'>{name}</p>{" "}
        <p className='wrapUserInfoTag'>@{tag}</p>
        <p className='wrapUserInfoLocation'>{location}</p>{" "}
      </div>{" "}
      <ul className='listStatsUser'>
        {" "}
        <li className='listStatsUserItem'>
          <span>Followers</span>
          <span>{stats.followers}</span>{" "}
        </li>{" "}
        <li className='listStatsUserItem'>
          <span>Views</span>
          <span>{stats.views}</span>{" "}
        </li>{" "}
        <li className='listStatsUserItem'>
          <span>Likes</span>
          <span>{stats.likes}</span>{" "}
        </li>{" "}
      </ul>
    </div>
  );
};

export default Profile;
