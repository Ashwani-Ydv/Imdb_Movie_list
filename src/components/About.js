import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("about.title")}</h1>
      <p>{t("about.content")}</p>
    </div>
  );
}

export default About;
