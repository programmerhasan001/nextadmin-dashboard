"use client"
import { usePathname } from "next/navigation"
import styles from "./navbar.module.css"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname()
  const path = pathname.split("/").pop()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{path}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input className={styles.input} type="text" name="" id="" placeholder="Search..." />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}
