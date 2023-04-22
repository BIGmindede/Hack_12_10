import axios from "axios";

export async function get_all_users(token) {
    let data
    console.log("get_all_users")
    await axios.get('http://localhost:8080/person/all',
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
        data = res.data
    }).catch(error => {
        console.error('There was an error!', error);
    });
    return data
}

export async function send_friend_request(token, userId) {
    console.log("send friend request to", userId)
    await axios.post(`http://localhost:8080/friends/send_request/${userId}`, {},
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }
    ).catch(error => {
        console.error('There was an error!', error);
    });
}

export async function get_friends(token) {
    let data
    await axios.get('http://localhost:8080/friends',
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            data = res.data
        }
    );
    return data
}

export async function get_top_ten(token) {
    let data
    await axios.get('http://localhost:8080/person/getTopTen',
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            data = res.data
        }
    );
    return data
}

export async function get_feed(token, feedId) {
    let data
    await axios.get(`http://localhost:8080/feed/${feedId}`,
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            data = res.data
        }
    );
    return data
}

export async function get_feeds(token) {
    let data
    await axios.get('http://localhost:8080/feed',
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            data = res.data
        }
    );
    return data
}

export async function get_user(token, userId) {
    let data
    await axios.get(`http://localhost:8080/person/${userId}`,
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            data = res.data
        }
    );
    return data
}

export async function get_user_feeds(token, userId) {
    let data
    await axios.get(`http://localhost:8080/feed/person/${userId}`,
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            data = res.data
        }
    );
    return data
}

export async function get_user_rating(token, userId) {
    let data
    await axios.get(`http://localhost:8080/person/getRatingPosition/${userId}`,
        {
            headers: {
                "access-control-allow-origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            data = res.data
        }
    )
    return data
}



