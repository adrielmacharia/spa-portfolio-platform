import { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import ProjectList from './components/projectList';
import ProjectForm from './components/projectForm';
import { useProjects } from './hooks/useProjects';
import styles from './app.module.css';

export default function App() {
  const {
    projects,
    categories,
    addProject,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
  } = useProjects();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <section className={styles.intro} aria-labelledby="work-heading" id="work">
          <p className={styles.eyebrow}>Selected work</p>
          <h1 id="work-heading">A collection of thoughtful work.</h1>
          <p className={styles.subtitle}>Ideas made tangible through design, strategy, and craft.</p>
        </section>
        <div className={styles.toolbar}>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <label className={styles.filter}>
            <span className={styles.filterLabel}>Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">All categories</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <button className={styles.addBtn} onClick={() => setShowForm((s) => !s)}>
            {showForm ? 'Close Form' : '+ Add Project'}
          </button>
        </div>
        <p className={styles.resultCount} aria-live="polite">
          {projects.length} {projects.length === 1 ? 'project' : 'projects'}
        </p>
        {showForm && (
          <ProjectForm onAdd={(project) => { addProject(project); setShowForm(false); }} />
        )}
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}