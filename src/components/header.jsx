import styles from './header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}><span className={styles.mark}>◆</span>Lumen Studio</div>
        <nav className={styles.nav}><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </div>
    </header>
  );
}