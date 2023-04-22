import React from 'react'
import UserList from "../components/UserList";
import {get_all_users, send_friend_request} from "../requests";

const People = () => {

    return (
        <div className="my-container">
            <h1 className="my-3">Люди</h1>
            <UserList
                getUsers={get_all_users}
                actionToUser1={send_friend_request}
                nameAction1={"Добавить в друзья"}
            />
        </div>
    )
}

export default People