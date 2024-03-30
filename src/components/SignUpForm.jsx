import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { ContextProvider } from "../context/context";
import { fakeUsers } from "../fakeUsers";

export default function SignUpForm({ userImage }) {
  const navigate = useNavigate();
  const { setNewUser } = useContext(ContextProvider);
  const name = useRef();
  const description = useRef();
  const password = useRef();
  const username = useRef();

  const validateRegistration = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const usernameIsTaken = users.find(
      (user) => user?.username === username.current.value
    );

    if (
      username.current.value &&
      name.current.value &&
      description.current.value &&
      password.current.value &&
      userImage &&
      !usernameIsTaken
    ) {
      handleRegister();
      navigate("/mainpage");
    } else {
      alert("Please fill in all fields or make sure the username isn't taken");
    }
  };

  const handleRegister = () => {
    const newUser = {
      name: name.current.value,
      username: username.current.value,
      password: password.current.value,
      description: description.current.value,
      image: userImage,
      liked: [],
      disliked: [],
    };

    setNewUser(newUser);
  };

  /* for setting up fake users */
  //   const handleFakeUser = () => {
  //     fakeUsers.map((user) => {
  //       setNewUser(user);
  //     });
  //   };

  return (
    <form className="rounded-lg text-center md:min-w-[30rem] min-w-[20rem] text-white">
      {/* for setting up fake users */}
      {/* <button
        onClick={handleFakeUser}
        className=" border-2 border-black p-4 bg-white rounded-md"
      >
        setup fake users
      </button> */}
      <div className=" flex flex-col items-center py-2 ">
        <label>Name</label>
        <input
          className=" w-[80%] rounded-lg bg-white mt-2 p-2 focus:text-white focus:border-violet-800 focus:bg-pink-500 text-black focus:outline-none"
          type="text"
          ref={name}
        />
      </div>
      <div className="items-center  flex flex-col py-2 ">
        <label>Username</label>
        <input
          className=" w-[80%] rounded-lg bg-white mt-2 p-2 focus:text-white focus:border-violet-800 focus:bg-pink-500 text-black focus:outline-none"
          type="text"
          ref={username}
        />
      </div>
      <div className="items-center flex flex-col py-2 ">
        <label>Password</label>
        <input
          className=" w-[80%]  p-2 rounded-lg bg-white mt-2 focus:text-white  focus:border-violet-800 focus:bg-pink-500 text-black focus:outline-none"
          type="password"
          ref={password}
        />
      </div>
      <div className="items-center flex flex-col py-2 ">
        <label>Description</label>
        <textarea
          className=" w-[80%] resize-none focus:bg-pink-500 text-black focus:text-white rounded-lg bg-white mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
          placeholder="Some words to describe yourself ..."
          type="text"
          ref={description}
        />
      </div>
      <div className="flex justify-between py-2">
        <p className="flex items-center">
          <input className="mr-2" type="checkbox" />
          Remember me
        </p>
        <Link to="#">
          <p>Forgot password</p>
        </Link>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          validateRegistration();
        }}
        className="w-full my-5 py-2 bg-pink-500 max-w-[15rem] shadow-small text-white font-semibold rounded-lg hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-[#660066] focus:ring-opacity-50 transition-all duration-300 ease-in-out"
      >
        SIGN UP
      </button>
      <p>
        Already member?{" "}
        <Link to="/" className=" font-bold">
          Click here!
        </Link>
      </p>
    </form>
  );
}
