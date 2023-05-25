import './friendsList.css';

const FriendsList = (props) => {
    const {friends} = props;


    const friendList = friends.map((friend) => {
        let className = 'status';
        if(friend.isOnline) {
            className += ' active';
        }

        return (
            <li class="friend-item">
                <span class={className}></span>
                <img class="avatar" src={friend.avatar} alt={friend.avatar} width="48" />
                <p class="name">{friend.name}</p>
            </li>
        )
    })

    console.log(friendList);

    return (
        <ul class="friend-list">
            {/*<!-- Произвольное кол-во FriendListItem -->*/}
            {friendList}
        </ul>
    )
};

export default FriendsList;