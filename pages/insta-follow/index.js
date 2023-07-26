import { useState } from "react";
import axios from "axios";

const fetchGet = async () => {
  const { data } = await axios.get('/api/hello')
  return data
}

export const getServerSideProps = async () => {
  const cookie = "mid=ZAK1MAALAAHnprBhOFP1or6LsSxl; ig_nrcb=1; ig_did=3E567153-F364-4C74-8A06-D87EC98E9C34; datr=L7UCZLE633pksZIWrtBFOvm7; csrftoken=uP1JpEifTXK3pfkToFThHsOU1FXRZYdz; ds_user_id=1313557247; fbm_124024574287414=base_domain=.instagram.com; shbid=\"2110\\0541313557247\\0541721642440:01f7f9b9a2f18c84efd1d5b7b7dd08fd10e5bb0dafb7f0a9597064b2f39661281b835374\"; shbts=\"1690106440\\0541313557247\\0541721642440:01f7b8c3db863400bc3790fa4df2fffd6c04d506f6856b8e00a793b34413852d1aed62e4\"; dpr=1.5; sessionid=1313557247%3AIqhqrLz138D8aV%3A0%3AAYfqcUGTW9EHNokG11cJNkXnvWbh8IiaLsQJp2AKkqk; fbsr_124024574287414=lNqUNp5Uo46rQlOF2MutiX4dCVPKu0LGZnGWo4ganK0.eyJ1c2VyX2lkIjoiMTAwMDAzNTI1ODY1MDQwIiwiY29kZSI6IkFRRDNUTzdVbEZJM2hCVkNqQmtaa1VuVHZiZW93QVlaQWFJWk5pOExWUGRDQnBwS2VNb1p1YXdsMGlobDA1UVNSRjJFQlJNcjRySWJyalByeUkxc2NnZGx5d2s5cHBaMXRUQlE3OVUteDVfY19iNW1OV0xlV0drQi1rSFNaNGZ1R2wza05BajM2MTNSR2hpTUk1WUpSOWtydHZ0WnA5ai1WaEhnZFd2WG9hSWx4TjJZRzh0RWVsNHJhUHh0Z0ZFdnZiZmZBa2FocjFIXzJKSlVWUzlkNERBWmxTTGNNaWdEb0dVZnYzc2lTemE5ZzZpMzBrSmJoRHlxZ2ZpMlJpMHptVjAxckVscDBLMThsTWRPZWpzZjEyc0pyWm9PckZlaFVJeVdIcGhxVHlXRm13NnN2RkRncVRJdWoxRncwYks5X0VYb01BdndzT0NZUjVmQ3RXV01oWHpWIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUpRTVlkeEVreHA4MG1aQ0lwVVRGZjdYWkJHa2NwUjUwd0dMaFlXWkNZajM2TkJNc0NLNGVFNlNxaTdNSzFFdGFjcW1RR0xweUxST1BPQ0N6YmsyNHZ0M0c3SUhrU3VaQlpBQXp2MHVQR3U5NGFCY1dTWkEwVjA0NkJsMnVoVHpuQXpJd0VyWFkxR2hha0hjdzE2d2V6bEYxYkJaQk9XTExzMjBaQWgwQVZGd1pDWkE0Yk9rc2R1TU1aRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjkwMjc5ODU3fQ; fbsr_124024574287414=DHmUuufTAw65f3xl1Ugr0AyhaObniKU1Du4CtfAjui0.eyJ1c2VyX2lkIjoiMTAwMDAzNTI1ODY1MDQwIiwiY29kZSI6IkFRQmVZMEZGUEdmLTU4WlJWTHVjVWhZaFE3Mk1RZUxFUDcyNTJfM2lOdGRJZTk1eGhFMzNIazRZOWpkZUVtNndhMGloV3M4bGhWM1JTLTBPVDVnRnJhVTMzWnZJbjZwdGk3SkdNcnBkLW8zZ2JtMVd6Y2dMX0JXUmlkajZUSE5ob1puX0VoeERqMV9FTXBnNEtZWHctNGdXUU9QZi1iLU51eUpTa3k4NGEyNm11NERPdDk5N01JSkJTSDRvd3htX3Uwbnk3MjRYNmNiVFpfUldlYkdVTjF6V0xwMUxBclE0Q2NSeDFQM3Y5Y3RXOWFZRWJvNG5NQW55aDhxc293ajdyYmNwLWFSdm42TDdKTEhUdGtjYWdaV0FvZU95QVQwV3F2dndycFFPaUNHd29NRHVoRnIzT2xTNjFJT2tiNlZhcV91SkxYVGREcnBPTEl0THh4X2NRWVdUIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQURKbTFnRVlRRlFaQTRZeE5raFFNWkMwNElFRkVoR3B1d2oyMkJidlZTWW1LQld3SnViaHpmdmhUblNzNnM1TDRlT2c4Z3N4eTRCTU9GcW9jbzE3eG1qZkZLUjJlSzlpMHlhN3gwMXBUOUNBYmhHTzRaQWFsbVJSbFBKUFY4WkFFR3ZqZUJTQjdvemtuMThpQjVRSFpCUk83OFpBblpCRVpDTnBobzVwdGdmYnNaQ014RkU3M2xrMFpEIiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2OTAyODAyMTF9; rur=\"NAO\\0541313557247\\0541721816232:01f79d221539a98ad33d8a4f370a8f06a06a3047fc31b90012518e4845248afefb863f25\""

  const axiosConfig = {
    headers: {
      'content-Type': 'application/json',
      'User-Agent': 'Instagram 219.0.0.12.117 Android',
      'Cookie': cookie
    }
  }

  const { data } = await axios.get('https://www.instagram.com/api/v1/friendships/745679711/following/?count=12&max_id=12', axiosConfig)

  return { props: { data } }
}

const App = ({ data }) => {
  const [followinggList, setFollowinggList] = useState();
  console.log(data);

  const handleClick = async () => {
    const data = await fetchGet()
    setFollowinggList(data)
    console.log(data);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>Fetch</button>
    </div>
  )
}

export default App