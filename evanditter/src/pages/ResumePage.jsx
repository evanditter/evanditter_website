import React from "react";

const ResumePage = () => {
  return (
    <div className="max-container px-4 py-12 min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-3xl font-bold mb-8 text-center text-[#181A2A] dark:text-white">Evan Ditter's Resume</h1>
      <div className="w-full max-w-4xl border rounded-lg overflow-hidden shadow-lg bg-white">
        <iframe
          src="/Evan_Ditter_Resume_2025.pdf"
          title="Evan Ditter Resume"
          className="w-full h-[80vh] min-h-[600px]"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default ResumePage;
