
import React from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => (
  <div 
    className="group cursor-pointer overflow-hidden border-b border-neutral-200 pb-12 transition-all hover:border-neutral-900"
    onClick={() => onClick(project)}
  >
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      <div className="flex-1">
        <span className="text-sm font-medium uppercase tracking-widest text-neutral-400">
          {project.category}
        </span>
        <h3 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 group-hover:translate-x-2 transition-transform duration-300">
          {project.title}
        </h3>
      </div>
      <div className="flex gap-2 flex-wrap md:justify-end">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full border border-neutral-200 bg-white text-neutral-600">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-neutral-100">
      <img 
        src={project.image} 
        alt={project.title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>
    <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-3xl">
      {project.description}
    </p>
  </div>
);

export default ProjectCard;
