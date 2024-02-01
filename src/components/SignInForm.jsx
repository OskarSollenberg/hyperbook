import loginImg from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../context/AuthenticationContext";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

export default function SignInForm() {
  const { setAllUsers } = useContext(AuthenticationContext);
  const usernameBox = useRef();
  const passwordBox = useRef();
  const navigate = useNavigate();
  const { handleLogIn } = useAuth();

  const goToHomePage = () => {
    navigate("/mainpage");
  };

  function login() {
    if (handleLogIn(usernameBox.current.value, passwordBox.current.value)) {
      goToHomePage();
    }
  }

  function setupTestUsers() {
    const testUsers = [
      {
        name: "Marcus",
        username: "tacoo",
        password: "1",
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        liked: [],
        disliked: [],
      },
      {
        name: "ben",
        username: "ben",
        password: "1",
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        liked: ["tacoo"],
        disliked: [],
      },
      {
        name: "moa",
        username: "moa",
        password: "1",
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        liked: [],
        disliked: [],
      },
      {
        name: "peter",
        username: "peter",
        password: "1",
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        liked: ["tacoo"],
        disliked: [],
      },
      {
        name: "sara",
        username: "sara",
        password: "1",
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        liked: ["tacoo"],
        disliked: [],
      },
    ];
    setAllUsers(testUsers);
    localStorage.setItem("users", JSON.stringify(testUsers));
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className=" bg-gradient-to-r from-indigo-300 to-purple-500 flex flex-col justify-center">
        <button
          onClick={() => setupTestUsers()}
          className=" absolute top-0 p-2 bg-red-500 w-[10rem] rounded-lg active:bg-red-900 active:text-white"
        >
          press for users
        </button>

        <form className=" max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg  text-center">
          <h2 className="text-4xl dark:text-black mb-6 font-bold">SIGN IN</h2>
          <div className=" flex flex-col py-2 text-black">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
              type="text"
              ref={usernameBox}
            />
          </div>
          <div className=" flex flex-col py-2 text-black">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-200 mt-2  focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
              type="password"
              ref={passwordBox}
            />
          </div>
          <div className="flex justify-between py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p>Forgot password</p>
          </div>
          <button
            onClick={login}
            className="w-full my-5 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/30 text-white font-semibold rounded-lg hover:bg-pink-400"
          >
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
