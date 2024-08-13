import React from 'react'
import styles from "@/app/contact/contact.module.css"
import Image from 'next/image'
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
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
        <div className={styles.socials}>
          <h4>Get me on socials</h4>
          <ul className={styles.links}>
           <Link href={"https://github.com/oluwatrillions"}><VscGithubInverted color='white' fontSize={50}/></Link> 
           <Link href={"https://x.com/Oluwatrillions"}><VscTwitter color='white' fontSize={50}/></Link> 
           <Link href={"https://www.linkedin.com/in/oluwatrillions/"}><GrLinkedin color='white' fontSize={50}/></Link> 
           {/* <Link><VscGithubInverted color='white' fontSize={50}/></Link>  */}
          </ul>
        </div>
    </div>
  )
}

export default page