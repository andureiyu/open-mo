"use client";

import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image"; // Import `Image` from next/image

export default function Confirm() {
  const router = useRouter();
  const yesAudioref = useRef(null);
  const noAudioref = useRef(null);

  const playYesSound = () => {
    if (yesAudioref.current) {
      yesAudioref.current.pause(); // Stop any ongoing playback
      yesAudioref.current.currentTime = 0; // Reset playback position
      yesAudioref.current.play().catch((error) => {
        console.error("Error playing Yes sound:", error);
      });
    }
  };

  const playNoSound = () => {
    if (noAudioref.current) {
      noAudioref.current.pause(); // Stop any ongoing playback
      noAudioref.current.currentTime = 0; // Reset playback position
      noAudioref.current.play().catch((error) => {
        console.error("Error playing No sound:", error);
      });
    }
  };

  // Reset audio when the component is mounted or navigated back to
  useEffect(() => {
    if (yesAudioref.current) {
      yesAudioref.current.pause();
      yesAudioref.current.currentTime = 0;
    }
    if (noAudioref.current) {
      noAudioref.current.pause();
      noAudioref.current.currentTime = 0;
    }
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-4 bg-[#ffeeba]"
      style={{ cursor: "url('/cursor/stardew-val.cur'), auto" }}
    >
      {/* Replace <img> with <Image /> */}
      <Image 
        src="/assets/images/bunnyusure.gif"
        alt="Animated Bunny"
        className="w-32 h-32 mb-4"
        width={128} // Specify width
        height={128} // Specify height
      />

      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-4 text-[#4c361d]"
      >       
        Are you sure?
      </h1>
      <p
        className="text-base md:text-lg lg:text-xl text-center mb-6 text-[#4c361d]"
      >
        Do you want to proceed?
      </p>
      <div className="flex flex-row space-x-4 sm:space-x-[60px]">
        <motion.button
          className="flex items-center justify-center px-6 py-3 bg-[#ffeeba] text-[#4c361d] text-lg font-semibold rounded-lg border-4 border-[#4c361d] shadow-[4px_4px_0px_#4c361d] hover:shadow-[6px_6px_0px_#4c361d] hover:bg-[#fddca1] transition-all duration-300"
          style={{ cursor: "url('/cursor/stardew-val.cur'), auto" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            playYesSound();
            router.push("/letter");
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
    </div>
  );
}