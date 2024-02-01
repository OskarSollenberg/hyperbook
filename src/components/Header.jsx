import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";
import { HiMiniHeart } from "react-icons/hi2";
import { MdOutlineExitToApp } from "react-icons/md";
import useGetPersonalLikes from "../hooks/useGetPersonalLikes.hook";

export default function Header() {
  const { user, handleLogOut } = useAuth();
  const ICONSIZE = 35;
  let MATCHCOUNT = useGetPersonalLikes(user.username).length;

  return (
    <div
      className={`
      sticky
      top-0
      z-50	
      flex 
      flex-row
      flex-end
      justify-between
      items-center
      align-middle
      w-screen 
      p-2 h-14
      pt-2 
      shadow-lg
      text-white 
      bg-zinc-900 
      
      `}
    >
      <div className="flex gap-2">
        <div
          className="header-icon bg-gray-400 font-bold h-8 w-8 rounded-full mx-1"
          style={{
            backgroundImage: `url(${user.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pt-1">{user.name}</div>
      </div>

      <Link
        to="/mainpage"
        className="flex flex-row font-bold ml-32 hover:scale-105 transition ease-in-out duration-500"
      >
        <div className="text-2xl text-white py-0 px-1">Hi</div>
        <div className="text-2xl text-black bg-orange-500 py-0 px-1 rounded-md">
          nder
        </div>
      </Link>

      <div className="self-end flex flex-row">
        <div className=" header-icon text-2xl flex justify-center items-end w-20 mr-2">
          <Link to="/matches">
            <HeaderIcon
              icon={
                <HiMiniHeart
                  size={ICONSIZE}
                  className={`${
                    MATCHCOUNT
                      ? "text-rose-700 hover:text-rose-500"
                      : "text-gray-400 hover:text-gray-200"
                  } hover:scale-110 transition ease-in-out duration-500`}
                />
              }
            />
          </Link>
          <div
            className={`text-xl mb-0.5 mr-1 ${
              MATCHCOUNT ? "text-white" : "text-gray-400"
            }`}
          >
            {MATCHCOUNT}
          </div>
        </div>
        <div onClick={handleLogOut}>
          <HeaderIcon
            icon={
              <MdOutlineExitToApp
                size={ICONSIZE}
                className="text-gray-700 hover:text-gray-200 transition ease-in-out duration-500"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

const HeaderIcon = ({ icon }) => {
  return <div className="header-icon pt-2">{icon}</div>;
};
