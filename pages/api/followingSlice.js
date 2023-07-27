import axios from "axios"

export const fetchFollowing = async (userId) => {
    const cookie = 'mid=ZAK1MAALAAHnprBhOFP1or6LsSxl; ig_nrcb=1; ig_did=3E567153-F364-4C74-8A06-D87EC98E9C34; datr=L7UCZLE633pksZIWrtBFOvm7; fbm_124024574287414=base_domain=.instagram.com; dpr=1.5; shbid="2110\\0541313557247\\0541721902298:01f76f4f795163a2e70f142b06226dcee3d63a1df3f66e6b317ba734fda48f9b673f3c95"; shbts="1690366298\\0541313557247\\0541721902298:01f7b9323d69b6a831cfbcbfa0e79d13e43bdc34262a14051c7de1df97996cd245b4a630"; ds_user_id=1313557247; fbsr_124024574287414=onvwqns-7VPftTwevQR0o44hiFnbIG1fbg_Bvw-MRuQ.eyJ1c2VyX2lkIjoiMTAwMDAzNTI1ODY1MDQwIiwiY29kZSI6IkFRQXlxNWQxMU16U3BLdUNlVVlnTUNPNXNzemtESVVNNy1UWUg5M0VpVnRLVEZRd0ljZ0VFT09SbXhmWEJPZTNrZkg4czBtNDQ2SnRqLUptLXhmX2MwLXNBTEZ5MmxLS1U1dnVQaXhBZGNDQ2xXZ01BM1hVOUxoNmpwSFBoNGViankwLUFJbXE0dlRZVnd0Z29WMGk5R0pCTzhzZS02RmJFbW9rTTBqLS1zUGVwOEgwYTlDNTVPcjhxWFZKYnBHRk54V1JManp0elJmdnR0a3I5R2pLTHlWNDI5OWRjbTBLN2JSd08wLVIyY3hsNTN3UHNRX2RPTGJLTW01TEpuU3JBSE04dzJraVJEVm5PNWV3aVByS1hTaUJYVnRaRzkwRmY3TG9OelpDMmk2WldCZUpyN180UHkyZ2VTNE5HSnBqQklDUDZqOGtWSmdwQm5jS21nc09oTnZPIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCT1pCNTFQTmRLSTlaQkphMEM2NEVYaElXRVpDWkJVYmREYXpGOFdrQjB1OFpDdkRqdXBLVmJjUXZPc2hIV3FMT0oxdXFZWkNSUTlWWkE4SGRnelFZT2Q3bnFjTVdBbVpCNGk3eGRiU3ZtVFRxSUpRaG5MclhtSnBuSDJldlRHSHRTaEd2TWR0S1B3bEVFN01saXg2TG5LR0Vzb2p3aG9hbGg0c1ZHYmo0VnBBY0VqTGl3VkhRQ05aQzZKVGdaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjkwNDQyMDE5fQ; csrftoken=MFUjVMgEVf2npl5XlKWo2D5M6G0Lf0Vr; sessionid=1313557247%3AMmEsaQoVWUfhvN%3A0%3AAYfBDyRLRa2aQ-oqkCBvZCuyTHo96aJliwo2khwRuw; fbsr_124024574287414=onvwqns-7VPftTwevQR0o44hiFnbIG1fbg_Bvw-MRuQ.eyJ1c2VyX2lkIjoiMTAwMDAzNTI1ODY1MDQwIiwiY29kZSI6IkFRQXlxNWQxMU16U3BLdUNlVVlnTUNPNXNzemtESVVNNy1UWUg5M0VpVnRLVEZRd0ljZ0VFT09SbXhmWEJPZTNrZkg4czBtNDQ2SnRqLUptLXhmX2MwLXNBTEZ5MmxLS1U1dnVQaXhBZGNDQ2xXZ01BM1hVOUxoNmpwSFBoNGViankwLUFJbXE0dlRZVnd0Z29WMGk5R0pCTzhzZS02RmJFbW9rTTBqLS1zUGVwOEgwYTlDNTVPcjhxWFZKYnBHRk54V1JManp0elJmdnR0a3I5R2pLTHlWNDI5OWRjbTBLN2JSd08wLVIyY3hsNTN3UHNRX2RPTGJLTW01TEpuU3JBSE04dzJraVJEVm5PNWV3aVByS1hTaUJYVnRaRzkwRmY3TG9OelpDMmk2WldCZUpyN180UHkyZ2VTNE5HSnBqQklDUDZqOGtWSmdwQm5jS21nc09oTnZPIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCT1pCNTFQTmRLSTlaQkphMEM2NEVYaElXRVpDWkJVYmREYXpGOFdrQjB1OFpDdkRqdXBLVmJjUXZPc2hIV3FMT0oxdXFZWkNSUTlWWkE4SGRnelFZT2Q3bnFjTVdBbVpCNGk3eGRiU3ZtVFRxSUpRaG5MclhtSnBuSDJldlRHSHRTaEd2TWR0S1B3bEVFN01saXg2TG5LR0Vzb2p3aG9hbGg0c1ZHYmo0VnBBY0VqTGl3VkhRQ05aQzZKVGdaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjkwNDQyMDE5fQ; rur="NAO\\0541313557247\\0541721978024:01f7efe1edb3b90b6c3a44cbea3596bc4fd1b5d08715c963153396e373b11c26f1a70459"'
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
        const { data: { users } } = await axios.get(`https://www.instagram.com/api/v1/friendships/${userId}/following/?count=${count}&max_id=${startId}`, axiosConfig)

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

    const dataIntersection = dataUser1.filter(user1 => dataUser2.some(user2 => user1.username === user2.username));

    return dataIntersection
}

export default async function handler(req, res) {
    const { userId1, userId2 } = req.query
    const data = await compareFollowing(userId1, userId2)

    res.status(200).json(data)
}