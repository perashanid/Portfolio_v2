import React, { useState } from 'react';
import { Skill } from '../../types';

// Demo skills data from data.sql
const demoSkills: Skill[] = [
  // Programming Languages
  { id: 1, name: 'JavaScript', category: 'Programming Languages', proficiencyLevel: 5, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 2, name: 'TypeScript', category: 'Programming Languages', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { id: 3, name: 'Python', category: 'Programming Languages', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id: 4, name: 'HTML5', category: 'Programming Languages', proficiencyLevel: 5, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 5, name: 'CSS3', category: 'Programming Languages', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  // Frameworks & Libraries
  { id: 6, name: 'Node.js', category: 'Frameworks', proficiencyLevel: 5, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id: 7, name: 'Express.js', category: 'Frameworks', proficiencyLevel: 5, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { id: 8, name: 'React', category: 'Frameworks', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id: 9, name: 'Tailwind CSS', category: 'Frameworks', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { id: 10, name: 'Bootstrap', category: 'Frameworks', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },

  // Databases
  { id: 13, name: 'PostgreSQL', category: 'Databases', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id: 14, name: 'MySQL', category: 'Databases', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { id: 15, name: 'MongoDB', category: 'Databases', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { id: 16, name: 'Redis', category: 'Databases', proficiencyLevel: 3, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { id: 17, name: 'SQLite', category: 'Databases', proficiencyLevel: 3, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },

  // Tools & Technologies
  { id: 18, name: 'Docker', category: 'Tools', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { id: 19, name: 'Kubernetes', category: 'Tools', proficiencyLevel: 3, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { id: 20, name: 'AWS', category: 'Tools', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { id: 21, name: 'Git', category: 'Tools', proficiencyLevel: 5, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { id: 22, name: 'Jenkins', category: 'Tools', proficiencyLevel: 3, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { id: 23, name: 'VS Code', category: 'Tools', proficiencyLevel: 5, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { id: 24, name: 'IntelliJ IDEA', category: 'Tools', proficiencyLevel: 4, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },

  // Currently Learning
  { id: 25, name: 'Next.js', category: 'Currently Learning', proficiencyLevel: 3, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { id: 26, name: 'MERN Stack', category: 'Currently Learning', proficiencyLevel: 3, yearsOfExperience: 0 },
  { id: 27, name: 'GraphQL', category: 'Currently Learning', proficiencyLevel: 2, yearsOfExperience: 0, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { id: 28, name: 'Microservices', category: 'Currently Learning', proficiencyLevel: 3, yearsOfExperience: 0 },
  { id: 29, name: 'DevOps', category: 'Currently Learning', proficiencyLevel: 2, yearsOfExperience: 0 },
  { id: 30, name: 'Machine Learning', category: 'Currently Learning', proficiencyLevel: 2, yearsOfExperience: 0 },
];

const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const skills = demoSkills;
  const categories = ['all', 'Programming Languages', 'Frameworks', 'Databases', 'Tools', 'Currently Learning'];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Group skills by category for display
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const TechIcon: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="group flex flex-col items-center p-4 bg-white dark:bg-medium-gray rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
      {skill.iconUrl ? (
        <img
          src={skill.iconUrl}
          alt={skill.name}
          className="w-12 h-12 mb-3 object-contain"
        />
      ) : (
        <div className="w-12 h-12 mb-3 bg-warm-brown dark:bg-warm-brown-light rounded-lg flex items-center justify-center text-light-sage dark:text-dark-charcoal font-bold text-lg">
          {skill.name.charAt(0)}
        </div>
      )}
      <h4 className="font-medium text-dark-charcoal dark:text-light-sage text-center text-sm">
        {skill.name}
      </h4>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full mx-0.5 ${
              i < skill.proficiencyLevel
                ? 'bg-warm-brown dark:bg-warm-brown-light'
                : 'bg-medium-gray/30 dark:bg-light-sage/30'
            }`}
          />
        ))}
      </div>
    </div>
  );



  return (
    <section id="technologies" className="section-padding bg-light-sage/50 dark:bg-dark-charcoal">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-charcoal dark:text-light-sage">
            Technologies & Skills
          </h2>
          <div className="w-20 h-1 bg-warm-brown dark:bg-warm-brown-light mx-auto mb-8"></div>
          <p className="text-medium-gray dark:text-light-sage/80 max-w-2xl mx-auto">
            Here are the technologies and tools I work with. I'm always learning and expanding my skill set.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? 'bg-warm-brown dark:bg-warm-brown-light text-light-sage dark:text-dark-charcoal'
                  : 'bg-white dark:bg-medium-gray text-medium-gray dark:text-light-sage hover:bg-warm-brown/10 dark:hover:bg-warm-brown-light/10'
              }`}
            >
              {category === 'all' ? 'All Technologies' : category}
            </button>
          ))}
        </div>

        {/* Technologies Display */}
        {selectedCategory === 'all' ? (
          // Show technologies grouped by category
          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold mb-6 text-center text-dark-charcoal dark:text-light-sage capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {categorySkills.map((skill) => (
                    <TechIcon key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show technologies for selected category
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-dark-charcoal dark:text-light-sage capitalize">
              {selectedCategory}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredSkills.map((skill) => (
                <TechIcon key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-medium-gray dark:text-light-sage/70 text-lg">No technologies found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;