"use client";

import Image from "next/image"; // Import `Image` from next/image

export default function naur1() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-gray-800 overflow-hidden"
      style={{ cursor: "url('/cursor/stardew-val.cur'), auto" }} // Custom cursor applied here
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#ffeeba]"></div>

      {/* GIF at the Center */}
      <div className="z-10 flex flex-col items-center">
        {/* Replace <img> with <Image /> */}
        <Image
          src="/assets/images/toastedcat.gif"
          alt="Centered GIF"
          className="object-contain mb-4" // Added margin below the GIF
          width={256} // Set width based on w-64 (64 * 4 = 256px)
          height={256} // Set height based on h-64 (64 * 4 = 256px)
        />

        {/* Heading Below the GIF */}
        <h2 className="text-4xl font-bold text-gray-900">
          may toast ako...
        </h2>
      </div>
    </div>
  );
}