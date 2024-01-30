import { useState } from "react";

export default function useCamera() {
  const [userImage, setUserImage] = useState(null);

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  return { userImage, saveImage };
}
