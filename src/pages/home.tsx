import React from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h1>env : {import.meta.env.VITE_ENV}</h1>
      <p className="text-3xl font-bold text-blue-400 underline ">
        Tailwindcss 4.0
      </p>
    </div>
  );
}

export default Home;
