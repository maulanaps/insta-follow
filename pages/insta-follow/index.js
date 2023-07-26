import { useState } from "react";
import axios from "axios";

const fetchGet = async () => {
  let userList = []
  let startId = 0
  const count = 200

  while (true) {
    const { data: { users } } = await axios.get(`/api/following/?count=${count}&startId=${startId}`)
    userList = [...userList, ...users]
    startId = startId + count

    if (users < 200) break
  }

  return userList
}

const App = () => {
  const [followinggList, setFollowinggList] = useState();

  const handleClick = async () => {
    const data = await fetchGet()
    setFollowinggList(data)
    console.log(data);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>Fetch</button>
      {followinggList?.map((account, index) => (
        <div key={index}>
          <h6>{account.username}</h6>
          <h6>{account.full_name}</h6>
        </div>
      ))}
    </div>
  )
}

export default App