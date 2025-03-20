import React, { useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";

import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate, useParams } from "react-router";

function Home() {
  const langParam = useParams().lang ?? "en";
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    i18n.changeLanguage(langParam);
  }, [langParam]);

  return (
    <div>
      <h1>Home</h1>
      <h1>env : {import.meta.env.VITE_ENV}</h1>
      <p className="text-3xl font-bold text-blue-400 underline ">
        Tailwindcss 4.0
      </p>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <LanguageIcon></LanguageIcon>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={langParam}
          name="radio-buttons-group"
          onChange={(e) => {
            window.location.href = `/${e.target.value}`;
          }}
        >
          <FormControlLabel
            value="en"
            control={<Radio />}
            label="en"
          />
          <FormControlLabel
            value="th"
            control={<Radio />}
            label="th"
          />
        </RadioGroup>
      </FormControl>
      <h1>{t("Welcome to React")}</h1>
      <div className=" bg-amber-100 h-screen "></div>
      <button onClick={() => navigate("/page1")}>go to page1</button>
    </div>
  );
}

export default Home;
