import PropTypes from 'prop-types';
// import {friendsInJSON} from "./friends/friends.json"
import {s} from "./FriendList.module.css"

export const FriendList = ({friendsInJSON}) {
    return (<ul  className={s.list}>
        {friendsInJSON.map(({id, name, avatar, isOnline}) => (
            <li
                key={id}
                className={s.item}
                avatar={avatar}
                name={name}
                isOnline={isOnline}>
                <span class="status"></span>
                <img className={avatar} src={avatar} alt={name} width="48" />
                <p className={name}></p>
                </li>
        ))}
    </ul>
        );
    }


FriendList.propTypes = {

};