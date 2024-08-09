import React from 'react'
import Image from "next/image"
import styles from "@/components/header/Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
            <Image src={"/demo-image.png"} width={50} height={50} alt='logo'/>
            <ul className={styles.links}>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header