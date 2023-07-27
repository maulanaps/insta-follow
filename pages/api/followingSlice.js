import axios from "axios"

export const fetchFollowing = async (userId) => {
    const cookie = 'mid=ZAK1MAALAAHnprBhOFP1or6LsSxl; ig_nrcb=1; ig_did=3E567153-F364-4C74-8A06-D87EC98E9C34; datr=L7UCZLE633pksZIWrtBFOvm7; fbm_124024574287414=base_domain=.instagram.com; dpr=1.5; shbid="2110\\0541313557247\\0541721902298:01f76f4f795163a2e70f142b06226dcee3d63a1df3f66e6b317ba734fda48f9b673f3c95"; shbts="1690366298\\0541313557247\\0541721902298:01f7b9323d69b6a831cfbcbfa0e79d13e43bdc34262a14051c7de1df97996cd245b4a630"; fbsr_124024574287414=esfm5-M7QjQLJ14gIosESnIuOSo5NgJsFC8WEsZtAxo.eyJ1c2VyX2lkIjoiMTAwMDAzNTI1ODY1MDQwIiwiY29kZSI6IkFRQ0FsajgyQkltMGZUendQNlk4dDhINTM1aC0ydms0OUp2YlhRMHBsWkM1MzAxd0R6ejk4VkZ2cl83VGJ2dmt5X2xKa0hKYzdETW9MVjZ5XzVhazFsY21mQ0NzeFE0Q1JxQzBKNUlQbWN4VHRZY3FjbTgwcTNKbEx3UUM1WkNPTTlvOG1nQl9NcTFocXZwZnF5bWxrTEpWREdvX0N2ak1ucFBsTlNRTzNaTGY3bUNVYXhNQ1cwLUFmVEFhZnhMajdOejR6cVNxYmVvVXphRklDd0hxS3FXUlZJcWJTVVJ3dUowd1ptQWxzWGFUdFpjSVdScmlScVBQdlM3NkpIYm5TcmRISVk3VFdJQjdLRGxrZllPNVFzRGFfa0xleHFtdkotVTdqdk9VOV94NGxYbV85blVRVk5GbzM2blc4cmludzZ4YUREX2tJTFp0RkY1X1FnVW5oOXhEIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCTzRsVENoeU1naU8xWkNaQVpDcVhaQUxrcGdGRU1yWE84c1pBQmF1ZzViQ0VaQjJiTHA5bzVjZTZJczBBbFpDbElCWE12QjVHWG9Sdkc1cWF0dUdMdm8yY2FaQmJQVVB0MVpDaUVONXR2Rkd6V1hiQlpBWUZkSUZlWkI4ZFpCQlAwdnRoQ2lUb004QWdFQzg0QXNyYmNiVUZ0UndvWkFkb3ptb01aQ0tBYVlDZFpDa0RLM3ZYV3c2b1hGUEtUSlJJc1FaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjkwNDI1NDg2fQ; fbsr_124024574287414=esfm5-M7QjQLJ14gIosESnIuOSo5NgJsFC8WEsZtAxo.eyJ1c2VyX2lkIjoiMTAwMDAzNTI1ODY1MDQwIiwiY29kZSI6IkFRQ0FsajgyQkltMGZUendQNlk4dDhINTM1aC0ydms0OUp2YlhRMHBsWkM1MzAxd0R6ejk4VkZ2cl83VGJ2dmt5X2xKa0hKYzdETW9MVjZ5XzVhazFsY21mQ0NzeFE0Q1JxQzBKNUlQbWN4VHRZY3FjbTgwcTNKbEx3UUM1WkNPTTlvOG1nQl9NcTFocXZwZnF5bWxrTEpWREdvX0N2ak1ucFBsTlNRTzNaTGY3bUNVYXhNQ1cwLUFmVEFhZnhMajdOejR6cVNxYmVvVXphRklDd0hxS3FXUlZJcWJTVVJ3dUowd1ptQWxzWGFUdFpjSVdScmlScVBQdlM3NkpIYm5TcmRISVk3VFdJQjdLRGxrZllPNVFzRGFfa0xleHFtdkotVTdqdk9VOV94NGxYbV85blVRVk5GbzM2blc4cmludzZ4YUREX2tJTFp0RkY1X1FnVW5oOXhEIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCTzRsVENoeU1naU8xWkNaQVpDcVhaQUxrcGdGRU1yWE84c1pBQmF1ZzViQ0VaQjJiTHA5bzVjZTZJczBBbFpDbElCWE12QjVHWG9Sdkc1cWF0dUdMdm8yY2FaQmJQVVB0MVpDaUVONXR2Rkd6V1hiQlpBWUZkSUZlWkI4ZFpCQlAwdnRoQ2lUb004QWdFQzg0QXNyYmNiVUZ0UndvWkFkb3ptb01aQ0tBYVlDZFpDa0RLM3ZYV3c2b1hGUEtUSlJJc1FaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjkwNDI1NDg2fQ; ds_user_id=1313557247; sessionid=1313557247%3A5SSV6uvEbCtWci%3A0%3AAYeJjvGahXd5Fm1wYugjHebSkNTZc28XK446wypotA; csrftoken=3r467z9OAMsFCKurA0CQxnBuOfbAHI1Y; rur="NAO\\0541313557247\\0541721961806:01f74b1fd8fb5a2a5e779c971d2838b6c42d96c5a77f16a9e74e5dcd66f3c5d0d8f2bda3"'
    let userList = []
    let startId = 0
    const count = 200

    const axiosConfig = {
        headers: {
            'content-Type': 'application/json',
            'User-Agent': 'Instagram 219.0.0.12.117 Android',
            'Cookie': cookie
        }
    }

    while (true) {
        console.log('foo');
        console.log('userid: ', userId);
        const { data: { users } } = await axios.get(`https://www.instagram.com/api/v1/friendships/${userId}/following/?count=${count}&max_id=${startId}`, axiosConfig)
        console.log('bar');

        userList = [...userList, ...users]
        startId = startId + count

        if (users.length < count) break
    }

    return userList
}

const compareFollowing = async (userId1, userId2) => {

    const dataUser1 = await fetchFollowing(userId1)
    const dataUser2 = await fetchFollowing(userId2)

    console.log(dataUser1.length, dataUser2.length);

    const dataIntersection = dataUser1.filter(user => dataUser2.includes(user));

    return dataIntersection
}

export default async function handler(req, res) {
    const { userId1, userId2 } = req.query
    const data = await compareFollowing(userId1, userId2)

    res.status(200).json(data)
}