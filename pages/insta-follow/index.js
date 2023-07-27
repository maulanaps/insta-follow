import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useForm } from "react-hook-form";

const fetchGet = async ({ userId1, userId2 }) => {
  const { data } = await axios.get(`/api/followingSlice/?userId1=${userId1}&userId2=${userId2}`)
  console.log(data);
  return data
}

const App = () => {
  const [followingSliceList, setFollowingSliceList] = useState();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, getValues } = useForm()

  const onSubmit = async (dataForm) => {
    setLoading(true)

    const data = await fetchGet(dataForm)

    setFollowingSliceList(data)
    setLoading(false)
  }

  const onCookieSet = (e) => {
    e.preventDefault()
    const cookies = getValues('cookie').split('; ')

    cookies.forEach(cookie => {
      document.cookie = cookie
      console.log(cookie);
    })
  }

  return (
    <>
      <Head>
        <title>Insta follow</title>
      </Head>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
          <div>
            <input type="text" {...register('cookie')} placeholder="Cookie" className="ms-auto input input-bordered input-success w-full max-w-[15rem]" />
            <button className="btn btn-accent ms-3" onClick={onCookieSet}>Set</button>
          </div>
          <div className="mt-5">
            <input type="text" {...register('userId1')} placeholder="Id User 1" className="input input-bordered input-primary w-full max-w-[15rem]" />
            <input type="text" {...register('userId2')} placeholder="Id User 2" className="ms-3 input input-bordered input-primary w-full max-w-[15rem]" />
            <button className="btn btn-primary ms-3" type="submit">Following</button>
          </div>
        </form>
        {followingSliceList && !loading &&
          <>
            <p className="mb-3">Followed by both : <b>{followingSliceList.length}</b> accounts</p>
            {followingSliceList.map((user, index) => (
              <p key={index} className="mb-1">
                <span>{index + 1}. </span>
                <a href={`https://www.instagram.com/${user.username}`} target="_blank">{user.username}</a>
              </p>
            ))}
          </>
        }
        {loading && <span className="loading loading-spinner loading-lg"></span>}
      </div>
    </>
  )
}

export default App