import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.container}>
        <h2>Y</h2>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Lab</a></li>
        </ul>
    </nav>
  )
}