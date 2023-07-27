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
  const [usersId, setUsersId] = useState({ userId1: '', userId2: '' });
  const { register, handleSubmit } = useForm()

  const onSubmit = async (dataForm) => {
    setLoading(true)
    console.log(dataForm);

    const data = await fetchGet(dataForm)

    setFollowingSliceList(data)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Insta follow</title>
      </Head>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
          <input type="text" {...register('userId1')} placeholder="Id User 1" className="input input-bordered input-primary w-full max-w-xs" />
          <input type="text" {...register('userId2')} placeholder="Id User 2" className="ms-3 input input-bordered input-primary w-full max-w-xs" />
          <button className="btn btn-primary ms-3" type="submit">Following</button>
        </form>
        {followingSliceList && !loading &&
          <>
            <p>Following count : <b>{followingSliceList.length}</b></p>
            {followingSliceList.map((user, index) => (
              <p key={index} className="mt-3">{user.username}</p>
            ))}
          </>
        }
        {loading && <span className="loading loading-spinner loading-lg"></span>}
      </div>
    </>
  )
}

export default App