import { useState, useEffect } from "react";

const keyframes = [
  "../../animations/loading/Loading_01.png",
  "../../animations/loading/Loading_02.png",
  "../../animations/loading/Loading_03.png",
  "../../animations/loading/Loading_04.png",
  "../../animations/loading/Loading_05.png",
  "../../animations/loading/Loading_06.png",
  "../../animations/loading/Loading_07.png",
  "../../animations/loading/Loading_08.png",
  "../../animations/loading/Loading_09.png",
  "../../animations/loading/Loading_10.png",
  "../../animations/loading/Loading_11.png",
];

export default function LoadingAnimation() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((current) => (current + 1) % keyframes.length);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={keyframes[frame]}
      alt="loadingicon"
      className="w-16 h-16 object-contain"
    />
  );
}
