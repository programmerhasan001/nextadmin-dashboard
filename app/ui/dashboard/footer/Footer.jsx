import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Dev Hasan</div>
            <div className={styles.text}>&copy; All rights reserved.</div>
        </div>
    )
}
