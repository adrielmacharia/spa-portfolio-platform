import styles from './projectCard.module.css';
export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={project.image} alt={project.title} className={styles.img} loading="lazy" />
        <span className={styles.cat}>{project.category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
      </div>
    </article>
  );
}