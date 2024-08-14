"use client"

import React from 'react'
import Image from "next/image"
import styles from "@/components/header/Header.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathname = usePathname()
  
  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
            <Image src={"/demo-image.png"} width={50} height={50} alt='logo' className={styles.logo}/>
            <ul className={styles.links}>
                <Link href={"/"} className={`${styles.link} ${pathname.endsWith('/') && styles.active}`}>Home</Link>
                <Link href={"/projects"} className={`${styles.link} ${pathname.endsWith('/projects') && styles.active}`}>Projects</Link>
                <Link href={"/blog"} className={`${styles.link} ${pathname.includes('/blog') && styles.active}`}>Blog</Link>
                <Link href={"/contact"} className={`${styles.link} ${pathname.endsWith('/contact') && styles.active}`}>Contact</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header