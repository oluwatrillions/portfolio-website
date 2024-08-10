"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Framer from "@/framer-motion/Framer";

export default function Home() {
  return (
    <main className={styles.container}>
      <Framer 
        text="Welcome to my website..."
        el="h1"
      />
    </main>
  );
}
