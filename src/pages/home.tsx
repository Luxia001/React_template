import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";

function Home() {
  const [lang, setLang] = React.useState("en");
  return (
    <div>
      <h1>Home</h1>
      <h1>env : {import.meta.env.VITE_ENV}</h1>
      <p className="text-3xl font-bold text-blue-400 underline ">
        Tailwindcss 4.0
      </p>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label={lang}
        onChange={(e) => {
          setLang(e.target.checked ? "en" : "fr");
        }}
      />
    </div>
  );
}

export default Home;
