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
        <div className={styles.desc}>
          <Image src={'/profile-pic.jpg'} width={300} height={300} className={styles.avatar} alt="avatar"/>
            <span className={styles.info}>
              <Framer 
                text= {[
                  "My name is ",
                  "Ajose Michael Oluwatobi", 
                  "and I am a Fullstack Developer."
                ]}
                el= "h1"
              />
            </span>
        </div>
        <div className={styles.tech}>
          <h2>About me:</h2>
          <section>
                <h3>Fullstack developer and Technical writing</h3>
                <h2>I am a fullstack developer with <span>3</span>years of hands-on experience. Having worked with <span className={styles.javascript}>JAVASCRIPT</span>, <span className={styles.react}>REACT</span>, <span className={styles.node}>NODEJS</span>, <span className={styles.express}>EXPRESSJS</span>, <span className={styles.next}>NEXTJS</span>, I have created applications that helped solve client's needs. </h2>
                <h2>Being a skilled developer, I look forward to collaborating with developers and non-developers to create innovative solutions.</h2>
          </section>
        </div>
      </div>
    </main>
  );
}
