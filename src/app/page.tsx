"use client";
import leftLogo from "@/public/icons/Home.png";
import rightLogo from "@/public/icons/Home.png";
import iconLogo from "@/public/icons/apple-filled.png";
import styles from "./page.module.css";
import MainButtonComponent from "../components/Button";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <MainButtonComponent
          logo={leftLogo}
          customStyles="custom-primary"
          variant="primary"
        >
          Primary Button
        </MainButtonComponent>
        <MainButtonComponent
          rightLogo={rightLogo}
          customStyles="custom-secondary"
          variant="secondary"
        >
          Secondary Button
        </MainButtonComponent>

        <MainButtonComponent
          logo={iconLogo}
          customStyles="custom-tertiary"
          variant="tertiary"
          iconOnly
        />
        <MainButtonComponent
          handler={handleClick}
          customStyles="custom-large"
          variant="primary"
          size="large"
          loading={loading}
        >
          {loading ? "Loading..." : "Large Button"}
        </MainButtonComponent>

        <MainButtonComponent
          handler={() => alert("This should not happen!")}
          customStyles="custom-disabled"
          variant="secondary"
          size="small"
          disabled
        >
          Disabled Button
        </MainButtonComponent>
      </div>
    </main>
  );
}
