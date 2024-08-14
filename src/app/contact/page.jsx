import React from 'react'
import styles from "@/app/contact/contact.module.css"
import Image from 'next/image'
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import { FaDev } from "react-icons/fa";
import Link from 'next/link';



const page = () => {
  return (
    <div className={styles.bg}>
        <Image 
            src={"/contact-us.jpg"} 
            alt='contact me'
            fill
            quality="100"
        />
        <div className={styles.contact}>
          <div className={styles.socials}>
            <h4>Click to find me on my socials</h4>
            <ul className={styles.links}>
            <Link href={"https://github.com/oluwatrillions"}><VscGithubInverted color='white' fontSize={50}/></Link> 
            <Link href={"https://x.com/Oluwatrillions"}><VscTwitter color='white' fontSize={50} target="_blank"/></Link> 
            <Link href={"https://www.linkedin.com/in/oluwatrillions/"}><GrLinkedin color='white' fontSize={50}/></Link> 
            <Link href={"https://dev.to/oluwatrillions"}><FaDev color='white' fontSize={50}/></Link> 
            </ul>
          </div>
          <div className={styles.message}>
            <h3>Drop me a message here</h3>
            <div className={styles.details}>
              <form className={styles.form}>
                <input type="text" name='name' placeholder='name:' />
                <input type="text" name='email' placeholder='email:' />
                <textarea name="message" id="message" placeholder='type here' rows={10}></textarea>
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page