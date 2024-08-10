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
      <div className={styles.content}>
        <div>
          <Image src={'/profile-pic.jpg'} width={300} height={300} className={styles.avatar}/>
          <hi>My name is 
            <span>
              <Framer 
                text= {[
                  "Ajose Michael Oluwatobi",
                  "and I am a Fullstack Developer"
                ]}
                el= "h1"
              />
            </span>
          </hi>
        </div>
      </div>
    </main>
  );
}
