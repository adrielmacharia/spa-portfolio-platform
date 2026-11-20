import styles from './searchBar.module.css';
export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.wrap}>
      <span className={styles.icon}>🔍</span>
      <input type="search" placeholder="Search projects…" value={value}
        onChange={(e) => onChange(e.target.value)} aria-label="Search projects" />
    </div>
  );
}