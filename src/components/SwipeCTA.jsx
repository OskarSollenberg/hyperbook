import { useState, useContext } from "react";
import { ContextProvider } from "../context/context";

export default function SwipeCTA() {
  const [animateMatch, setAnimateMatch] = useState(false);
  const [animateMismatch, setanimateMismatch] = useState(false);
  const { targetUser, setTargetUser, allUsers } = useContext(ContextProvider);

  if (animateMatch || animateMismatch) {
    setTimeout(() => {
      setAnimateMatch(false);
      setanimateMismatch(false);
    }, 600);
  }

  function renderImage() {
    const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];
    setTargetUser(randomUser);
    // Remove image from carousel
    // Create a new object called liked and add it to user
    // Display a new image?? or just wait for pressing another image
  }

  return (
    <div className="ml-auto mr-auto w-[95vw] h-[80vh] text-[.8rem] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-[60rem] max-h-[37rem] rounded-lg shadow-xl p-5">
      <div
        className={`overflow-hidden relative h-auto w-[100%] md:h-[100%] md:w-auto rounded-lg flex-1 flex justify-center items-center gap-10`}
      >
        <button
          onClick={() => {
            setanimateMismatch(!animateMismatch);
            setTimeout(() => {
              renderImage();
            }, 300);
          }}
          className="text-red absolute bottom-10 hover:before:bg-redborder-red-500 h-16 w-16 rounded-full overflow-hidden border border-red-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full mr-[10rem]"
        >
          <span className="relative z-10 text-[2rem] grid m-auto">✖️</span>
        </button>

        <button
          onClick={() => {
            setAnimateMatch(!animateMatch);
            setTimeout(() => {
              renderImage();
            }, 300);
          }}
          className="text-red absolute bottom-10 h-16 w-16 rounded-full overflow-hidden border border-green-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full ml-[10rem]"
        >
          <span className="relative z-10 text-[2rem] grid m-auto">✔️</span>
        </button>

        <img
          className={`object-cover block m-auto w-[100%] h-[100%] rounded-t-lg md:rounded-none md:rounded-s-lg z-[-10] delay-75
	  ${animateMatch ? "transition-translate duration-200  translate-x-[100%]" : ""}
      	  ${
            animateMismatch
              ? "transition-translate duration-200  translate-x-[-100%]"
              : ""
          }
    `}
          src={targetUser.image}
          alt=""
        ></img>
      </div>
      <div className="flex flex-col flex-colleading-normal flex-1 p-5 justify-center">
        <h5 className=" text-2xl font-bold tracking-tight mb-2 text-gray-900">
          {targetUser.name}
        </h5>

        <div className="mb-3 font-normal rounded-lg text-gray-600 bg-white shadow-twe-inner text-start ">
          {targetUser.description}
        </div>
      </div>
    </div>
  );
}

//     useEffect(() => {
//       async function fetchData() {
//         const url =
//           "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";
//         const options = {
//           method: "GET",
//           headers: {
//             "X-RapidAPI-Key":
//               "2d640366b0msh8927fe9cb9f1ec6p158e2djsnda7256755aab",
//             "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
//           },
//         };

//         try {
//           const response = await fetch(url, options);
//           const result = await response.json();
//           const newQuote = result[0].text;
//           if (newQuote.length > 70) {
//             fetchData();
//           } else {
//             setQuote(newQuote);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       fetchData();
//     }, [image]);
