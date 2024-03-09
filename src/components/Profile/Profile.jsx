import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrap}>
      {" "}
      <div className={css.wrapUserInfo}>
        {" "}
        <img className={css.wrapUserInfoImg} src={image} alt='User avatar' />
        <p className={css.wrapUserInfoName}>{name}</p>{" "}
        <p className={css.wrapUserInfoTag}>@{tag}</p>
        <p className={css.wrapUserInfoLocation}>{location}</p>{" "}
      </div>{" "}
      <ul className={css.listStatsUser}>
        {" "}
        <li className={css.listStatsUserItem}>
          <span>Followers</span>
          <span className={css.listStatsItemElement}>
            {stats.followers}
          </span>{" "}
        </li>{" "}
        <li>
          <span>Views</span>
          <span className={css.listStatsItemElement}>{stats.views}</span>{" "}
        </li>{" "}
        <li>
          <span>Likes</span>
          <span className={css.listStatsItemElement}>{stats.likes}</span>{" "}
        </li>{" "}
      </ul>
    </div>
  );
};

export default Profile;
