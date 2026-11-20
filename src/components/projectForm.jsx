import { useState } from 'react';
import styles from './projectForm.module.css';

const empty = { title: '', description: '', category: '', image: '' };

export default function ProjectForm({ onAdd }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title is required';
    if (!form.description.trim()) errs.description = 'Description is required';
    if (!form.category.trim()) errs.category = 'Category is required';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    onAdd({
      title: form.title.trim(),
      description: form.description.trim(),
      category: form.category.trim(),
      image: form.image.trim() || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    });
    setForm(empty);
  };

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <h2>Add a New Project</h2>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="title">Title *</label>
          <input id="title" name="title" value={form.title} onChange={change} aria-invalid={!!errors.title} />
          {errors.title && <span className={styles.err}>{errors.title}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="category">Category *</label>
          <input id="category" name="category" value={form.category} onChange={change} aria-invalid={!!errors.category} />
          {errors.category && <span className={styles.err}>{errors.category}</span>}
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="description">Description *</label>
          <textarea id="description" name="description" rows="3" value={form.description} onChange={change} aria-invalid={!!errors.description} />
          {errors.description && <span className={styles.err}>{errors.description}</span>}
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="image">Image URL (optional)</label>
          <input id="image" name="image" type="url" value={form.image} onChange={change} placeholder="https://…" />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.btn}>Add Project</button>
      </div>
    </form>
  );
}