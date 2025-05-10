"use client";

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
        <img
          src="/assets/images/toastedcat.gif"
          alt="Centered GIF"
          className="w-64 h-64 object-contain mb-4" // Added margin below the GIF
        />

        {/* Heading Below the GIF */}
        <h2 className="text-4xl font-bold text-gray-900">
          may toast ako...
        </h2>
      </div>
    </div>
  );
}