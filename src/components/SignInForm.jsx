import loginImg from "../assets/login.jpg";
import { Link } from "react-router-dom";

export default function SignInForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className=" bg-gradient-to-r from-indigo-300 to-purple-500 flex flex-col justify-center">
        <form className=" max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg  text-center">
          <h2 className="text-4xl dark:text-black mb-6 font-bold">SIGN IN</h2>
          <div className=" flex flex-col py-2 text-black">
            <label>User Name</label>
            <input
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className=" flex flex-col py-2 text-black">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-200 mt-2  focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p>Forgot password</p>
          </div>
          <button className="w-full my-5 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/30 text-white font-semibold rounded-lg hover:bg-pink-400">
            SIGN IN
          </button>
          <p>
            No member?{" "}
            <Link to="/signup" className=" font-bold">
              Register!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
