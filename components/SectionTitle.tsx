
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, className = "" }) => (
  <div className={`mb-12 text-center ${className}`}>
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg max-w-2xl mx-auto opacity-70`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
