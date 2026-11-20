import { useState, useMemo, useCallback } from 'react';
import { initialProjects } from '../data';

export function useProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const categories = useMemo(
    () => [...new Set(projects.map((project) => project.category))].sort(),
    [projects]
  );

  const addProject = useCallback((p) => {
    setProjects((prev) => [{ ...p, id: Date.now() }, ...prev]);
  }, []);

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return projects.filter((p) =>
      (category === 'all' || p.category === category) &&
      (!q || [p.title, p.description, p.category].some((field) => field.toLowerCase().includes(q)))
    );
  }, [projects, searchTerm, category]);

  return {
    projects: filtered,
    categories,
    addProject,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
  };
}