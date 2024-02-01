import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import AnimationData from "src/assets/animationBee.json";

export default function AnimationBee() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: AnimationData,
    });
    animation.setSpeed(0.6);

    return () => {
      animation.destroy();
    };
  }, [AnimationData]);

  return <div className="opacity-80 " ref={animationContainer}></div>;
}
