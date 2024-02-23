import { useState } from "react";
import GenderOpt from "../components/GenderOpt";


const Signup = () => {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500 ml-3">StrakinsChat</span>
        </h1>
        <form action="">
          <div>
            <label className='label p-2'>
                <span className='text-base text-white'>Full Name</span>
              </label>
              <input
                type='text'
                placeholder='Enter Username'
                className='w-full input input-bordered h-10'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div>
            <label className='label p-2'>
                <span className='text-base text-white'>Username</span>
              </label>
              <input
                type='text'
                placeholder='Enter Username'
                className='w-full input input-bordered h-10'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div>
            <label className='label p-2'>
                <span className='text-base text-white'>Password</span>
              </label>
              <input
                type='text'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div>
            <label className='label p-2'>
                <span className='text-base text-white'>Confirm Password</span>
              </label>
              <input
                type='text'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <GenderOpt />
          <a href="/login" className='text-sm text-white  hover:underline hover:text-blue-700 inline-block'>
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup