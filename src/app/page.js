"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import SplitText from "./SplitText"; 
import { Gamja_Flower } from "next/font/google"; // Import the font

const gamjaFlower = Gamja_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gamja-flower",
});

export default function Home() {
  const router = useRouter();
  const yesAudioref = useRef(null);
  const noAudioref = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const playAudio = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => {
          console.log("Audio played successfully");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };

  const playYesSound = () => playAudio(yesAudioref);
  const playNoSound = () => playAudio(noAudioref);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#ffeeba]">
        <div className="loader mb-4"></div>
        <p className="text-4xl font-semibold text-[#4c361d]">Loading...</p>
        <style jsx>{`
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4c361d;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen px-4 bg-[#ffeeba]"
      style={{ cursor: "url('/cursor/stardew-val.cur'), auto" }} // Custom cursor applied here
    >
      <img
        src="/assets/images/bunny-unscreen.gif"
        alt="Animated Bunny"
        className="w-32 h-32 mb-4"
      />

      {/* Animated H1 with SplitText */}
      <h1
        className={`text-6xl md:text-7xl lg:text-7xl font-semibold text-center mb-4 text-[#4c361d] ${gamjaFlower.class}`}
      >
        <SplitText
          text="Hi Yass!"
          animationFrom={{ transform: "translate3d(0,40px,0)" }}
          animationTo={{ transform: "translate3d(0,0,0)" }}
          delay={50}
        />
      </h1>

      {/* Animated P with SplitText */}
      <p
        className={`text-base md:text-lg lg:text-xl text-center mb-6 text-[#4c361d] ${gamjaFlower.class}`}
      >
        <SplitText
          text="I hope you're doing well, I have something to share to you, Do you want to see it?"
          animationFrom={{ transform: "translate3d(-20px,0,0)" }}
          animationTo={{ transform: "translate3d(0,0,0)" }}
          delay={30}
        />
      </p>

      <div className="flex flex-row space-x-4 sm:space-x-[60px]">
        <motion.button
          className="flex items-center justify-center px-6 py-3 bg-[#ffeeba] text-[#4c361d] text-lg font-semibold rounded-lg border-4 border-[#4c361d] shadow-[4px_4px_0px_#4c361d] hover:shadow-[6px_6px_0px_#4c361d] hover:bg-[#fddca1] transition-all duration-300"
          style={{ cursor: "url('/cursor/stardew-val.cur'), auto" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            playYesSound();
            router.push("/confirm");
          }}
        >
          <FaCheck className="mr-2" /> Yes
        </motion.button>
        <motion.button
          className="flex items-center justify-center px-6 py-3 bg-[#ffeeba] text-[#4c361d] text-lg font-semibold rounded-lg border-4 border-[#4c361d] shadow-[4px_4px_0px_#4c361d] hover:shadow-[6px_6px_0px_#4c361d] hover:bg-[#fddca1] transition-all duration-300"
          style={{ cursor: "url('/cursor/stardew-val.cur'), auto" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            playNoSound();
            router.push("/naur1");
          }}
        >
          <FaTimes className="mr-2" /> Naur
        </motion.button>
      </div>

      {/* Audio Elements */}
      <audio ref={yesAudioref} src="/audio/pop-7.mp3" preload="auto"></audio>
      <audio ref={noAudioref} src="/audio/pop-7.mp3" preload="auto"></audio>
    </motion.div>
  );
}