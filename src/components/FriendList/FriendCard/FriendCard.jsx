import s from "./FriendCard.module.css"
import PropTypes from 'prop-types';

export const FriendCard = ({ avatar, name, isOnline }) {
    <li className={s.item}>
        <span className={isOnline ? s.online : s.ofline} >{isOnline}</span>
        <img className={s.avatar} crs={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
    </li>
};

FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};

FriendCard.defaultProps = {
    name: User,
    isOnline: false,
};