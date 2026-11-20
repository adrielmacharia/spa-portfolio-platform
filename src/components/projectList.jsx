import ProjectCard from './projectCard';
import styles from './projectList.module.css';
export default function ProjectList({ projects }) {
  if (!projects.length) {
    return <p className={styles.empty}>No projects found. Try adjusting your search or category.</p>;
  }
  return (
    <div className={styles.grid}>
      {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}