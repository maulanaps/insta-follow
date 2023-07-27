import axios from "axios"

export const fetchFollowing = async (userId) => {
    let userList = []
    let startId = 0
    const count = 200

    console.log('fetch user: ', userId)

    const axiosConfig = {
        headers: {
            'content-Type': 'application/json',
            'User-Agent': 'Instagram 219.0.0.12.117 Android'
        }
    }

    while (true) {
        const { data: { users } } = await axios.get(`https://www.instagram.com/api/v1/friendships/${userId}/following/?count=${count}&max_id=${startId}`, axiosConfig)

        userList = [...userList, ...users]
        startId = startId + count

        if (users.length < count) break
    }

    return userList
}

const compareFollowing = async (userId1, userId2) => {

    const [dataUser1, dataUser2] = await Promise.all([fetchFollowing(userId1), fetchFollowing(userId2)])

    console.log(dataUser1.length, dataUser2.length);

    const dataIntersection = dataUser1.filter(user1 => {
        return dataUser2.some(user2 => user1.username === user2.username)
    });

    return dataIntersection
}

export default async function handler(req, res) {
    const { userId1, userId2 } = req.query
    const data = await compareFollowing(userId1, userId2)

    res.status(200).json(data)
}