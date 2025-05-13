"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PiFlowerTulipLight } from "react-icons/pi";
import { MdOutlineReplay } from "react-icons/md";

export default function Letter() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isEnvelopeOpening, setIsEnvelopeOpening] = useState(false);
  const [fallingPetals, setFallingPetals] = useState([]);
  const router = useRouter();

  const homeAudioRef = useRef(null);
  const pageLoadAudioRef = useRef(null);

  useEffect(() => {
    const petals = Array.from({ length: 150 }).map(() => ({
      top: `${Math.random() * -20}%`,
      left: `${Math.random() * 100}%`,
      x: Math.random() * 50 - 25,
      y: `${Math.random() * 150 + 100}%`,
      delay: Math.random() * 2,
    }));
    setFallingPetals(petals);
  }, []);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpening(true);
    setTimeout(() => {
      setIsLetterOpen(true);
    }, 1000);
  };

  const handleHomeClick = () => {
    if (homeAudioRef.current) {
      homeAudioRef.current.play();
    }
    router.push("/");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (pageLoadAudioRef.current) {
        try {
          pageLoadAudioRef.current.play();
        } catch (error) {
          console.warn("Audio playback failed:", error);
        }
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (pageLoadAudioRef.current) {
        try {
          pageLoadAudioRef.current.play();
        } catch (error) {
          console.warn("Audio playback failed:", error);
        }
      }
      // Remove the event listener after the first interaction
      document.removeEventListener("click", handleUserInteraction);
    };

    // Add an event listener for user interaction
    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen px-4 transition-colors duration-1000 ${
        isLetterOpen ? "bg-gradient-to-b from-[#a8e6ff] to-[#fef6e4]" : "bg-[#ffeeba]"
      }`}
      style={{ cursor: "url('/cursor/stardew-val.cur'), auto" }}
    >
      {isLetterOpen && (
        <div className="absolute inset-0 z-0 transition-opacity duration-1000 opacity-100">
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#6ec1e4] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-[#6ec1e4] opacity-70 animate-wave"></div>
        </div>
      )}

      {isLetterOpen && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 200 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: `${Math.random() * -100}vh`,
                left: `${Math.random() * 100}vw`,
              }}
              animate={{
                y: ["0vh", "100vh"],
                x: [0, Math.random() * 50 - 25],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8 text-pink-400"
              >
                <path
                  d="M12 2 C10 4, 8 6, 10 8 C12 10, 14 8, 16 6 C14 4, 12 2, 12 2 Z"
                  className="fill-pink-500"
                />
                <path
                  d="M12 2 C14 4, 16 6, 14 8 C12 10, 10 8, 8 6 C10 4, 12 2, 12 2 Z"
                  className="fill-pink-300"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      <motion.button
        className="fixed top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#ffeeba] text-[#4c361d] text-lg font-semibold rounded-full border-4 border-[#4c361d] shadow-[4px_4px_0px_#4c361d] hover:shadow-[6px_6px_0px_#4c361d] hover:bg-[#fddca1] transition-all duration-300 flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleHomeClick}
      >
        <MdOutlineReplay className="w-6 h-6" />
      </motion.button>

      {!isLetterOpen ? (
        <>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#6B4226] mb-6 text-center z-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Open It!
          </motion.h2>

          <motion.div
            className="relative w-64 h-48 sm:w-80 sm:h-56 lg:w-96 lg:h-64 cursor-pointer z-10"
            onClick={handleEnvelopeClick}
          >
            <motion.div
              className="absolute inset-0 bg-[#93c5fd] rounded-md overflow-hidden shadow-lg cursor-pointer hover:cursor-[url('/cursor/click.cur'),_auto]"
              animate={{
                scale: isEnvelopeOpening ? 1.05 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-[#FFDBDB] cursor-pointer hover:cursor-[url('/cursor/click.cur'),_auto]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-[#FFDBDB] cursor-pointer hover:cursor-[url('/cursor/click.cur'),_auto]"></div>
              <motion.div
                className="absolute top-0 left-0 w-full h-0 cursor-pointer hover:cursor-[url('/cursor/click.cur'),_auto]"
                style={{
                  paddingBottom: "50%",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backgroundColor: "#FFC6C6",
                  transformOrigin: "center top",
                }}
                animate={{
                  rotateX: isEnvelopeOpening ? -180 : 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute top-[20%] left-[10%] right-[10%] bottom-[20%] bg-white shadow-md rounded-md flex items-center justify-center text-[#6B4226] text-lg font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isEnvelopeOpening ? 1 : 0,
                  y: isEnvelopeOpening ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                For You
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 bg-white w-[90%] max-w-[20rem] sm:max-w-[30rem] md:max-w-[36rem] lg:max-w-[42rem] h-[52rem] shadow-2xl rounded-lg lg:rounded-xl z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-6 text-[#ff878d] text-center flex items-center justify-center gap-2">
            <span>For You</span>
            <img 
              src="/assets/images/oyennn-bunga-unscreen.gif" 
              alt="GIF" 
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 relative -top-2" 
            />
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#6B4226] leading-relaxed text-justify max-w-[32rem]">
            Hi Yass!
            <br />
            <br />
            Medyo nervous ako sabihin ito sayo pero I just want to say that there is someone who really likes you and always finds you really pretty and sweet, and that someone is me, haha. I&apos;ve always liked your vibe, your personality, your flaws, and, most importantly, your kindliness. I think it is very obvious na, but I&apos;ve had this feeling since last year. You always show positivity around people, which I greatly appreciate. Even though I am very shy, especially when I try my best to say hi to you all the time at school, but you always make me feel happy, and isa yan sa mga reasons ko bakit hindi ako absent sa mga NSTP classes HAHAHA. Sometimes, I always wonder if making this is okay for you, but to me, this is how I show my appreciation and a way to express yung feelings ko in a creative and a more sincere way through coding :D . But no pressure! You don&apos;t need to reciprocate or like me back or anything. I understand you fully, and I just want to be kind to you and to your friends naman din, always in all ways. Keep up the amazing things you are doing since you are an amazing person to many people, including me. It&apos;s such an honor meeting you, and I do hope nothing will change between us and we&apos;d stay friends. 😇
            <br />
            <br />
            Take care always!
            <br />
            Drei^^
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#6B4226] leading-relaxed text-justify max-w-[32rem] mt-6">
            P.S. I&apos;m very sorry if I ever made you feel uncomfortable or awkward. It&apos;s one of my fears din.
          </p>
        </motion.div>
      )}

      <audio ref={homeAudioRef} src="/audio/pop-7.mp3" preload="auto"></audio>
      <audio ref={pageLoadAudioRef} src="/audio/overcooked.mp3" preload="auto"></audio>
    </div>
  );
}
