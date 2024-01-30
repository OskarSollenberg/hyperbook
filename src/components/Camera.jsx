import { useRef, useContext } from "react";
import Webcam from "react-webcam";
import { ContextProvider } from "../context/context";

export default function Camera() {
  const { userImage, saveImage } = useContext(ContextProvider);
  const photoUrl = useRef(null);

  return (
    <div className="flex flex-row w-[500px] h-[400px] rounded-[1.5rem] p-6 m-10 bg-white shadow-md shadow-gray-500">
      <div>
        <Webcam
          className="rounded-[1rem]"
          height={300}
          width={300}
          audio={false}
          ref={photoUrl}
        ></Webcam>
        <button
          className="bg-rose-600 text-white px-5 py-2 my-5 rounded-lg"
          onClick={() => saveImage(photoUrl)}
        >
          Capture
        </button>
      </div>
      <div className="flex flex-col-reverse ">
        <img className="rounded-[1rem] w-48 " src={userImage} />
      </div>
    </div>
  );
}
