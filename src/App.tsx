import "./App.css";

function App() {
  return (
    <>
      <h1>env : {import.meta.env.VITE_ENV}</h1>
      <p className="text-3xl font-bold text-blue-400 underline ">
        Tailwindcss 4.0
      </p>
    </>
  );
}

export default App;
