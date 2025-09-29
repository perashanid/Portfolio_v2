import React, { useState } from 'react';
import { X, ExternalLink, Github, Calendar } from 'lucide-react';
import { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';

// Real projects data
const demoProjects: Project[] = [
  {
    id: 1,
    title: 'Survey Platform',
    description: 'User can make private or public surveys with better analytics section',
    detailedDescription: 'A comprehensive survey platform where users can create private or public surveys with advanced analytics. Features include anonymous survey responses, data export in CSV and JSON formats, survey sharing via links, and detailed analytics dashboard. Users can also browse and import data from other public surveys.',
    category: 'Web Application',
    featured: true,
    createdDate: '2024-01-15',
    liveUrl: 'https://survease-v2-uppv.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/survease_v2',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    imageUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 2,
    title: 'BookMarket',
    description: 'People can auction, trade or sell books at a fixed price and share books using PDFs',
    detailedDescription: 'A comprehensive book marketplace where users can auction, trade, or sell books at fixed prices. The platform also supports PDF book sharing, creating a complete ecosystem for book enthusiasts. Features include user authentication, bidding system, secure transactions, and file upload capabilities.',
    category: 'Web Application',
    featured: true,
    createdDate: '2024-02-20',
    liveUrl: 'https://book-marketplace-bfo0.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/Book-marketplace-v2',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Multer', 'Socket.io'],
    imageUrls: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 3,
    title: 'Campaign Builder',
    description: 'User can create fundraising and blood donation campaigns, share unique links',
    detailedDescription: 'A platform for creating and managing fundraising and blood donation campaigns. Users can create campaigns, share unique links, track progress, and manage donations. Features include campaign analytics, social sharing, and real-time updates on campaign progress.',
    category: 'Frontend',
    featured: true,
    createdDate: '2024-03-10',
    liveUrl: 'https://campaignbuilder.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/campaignBuilder',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    imageUrls: ['https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 4,
    title: 'Loading Terminal',
    description: 'Interactive terminal-style loading interface',
    detailedDescription: 'A creative terminal-style loading interface that simulates command-line operations. Perfect for adding a unique touch to web applications with its retro terminal aesthetic and smooth animations.',
    category: 'Frontend',
    featured: false,
    createdDate: '2024-01-05',
    liveUrl: 'https://loading-terminal.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/loading-terminal',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    imageUrls: ['https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 5,
    title: 'BD Stock Market API',
    description: 'The only free API for Bangladesh stock market data',
    detailedDescription: 'A comprehensive REST API providing free access to Bangladesh stock market data. This is the only free API available for BD stock market information, offering real-time stock prices, historical data, and market analytics.',
    category: 'Backend',
    featured: true,
    createdDate: '2023-12-15',
    liveUrl: 'https://bd-stock-market-api.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/bd-stock-market-api',
    technologies: ['Node.js', 'Express.js', 'Web Scraping', 'REST API', 'MongoDB'],
    imageUrls: ['https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 6,
    title: 'Stock Market BD',
    description: 'View BD stocks, profiles, top 30 stocks, register and create portfolio, check performance',
    detailedDescription: 'A comprehensive Bangladesh stock market platform where users can view stock information, company profiles, top 30 stocks, register accounts, create portfolios, and track portfolio performance. Built using the BD Stock Market API for real-time data.',
    category: 'Backend',
    featured: true,
    createdDate: '2023-11-05',
    liveUrl: 'https://bangladesh-stock-market.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/stock-market',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    imageUrls: ['https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 7,
    title: 'Media Bias Detector',
    description: 'Website that detects bias in media articles with scraping and analysis features',
    detailedDescription: 'An AI-powered platform that detects bias in media articles. Users can register, scrape articles by URL or website, select scraping quantity, run bias tests, favorite articles, and save them. Features advanced web scraping and natural language processing for bias detection.',
    category: 'Data Science',
    featured: true,
    createdDate: '2023-10-20',
    liveUrl: 'https://media-bias-a9x2.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/Media-bias',
    technologies: ['Python', 'Flask', 'NLP', 'Web Scraping', 'Machine Learning', 'BeautifulSoup'],
    imageUrls: ['https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 8,
    title: 'Research Paper Analyzer',
    description: 'AI-powered tool to extract information from research papers via links, PDFs, or URLs',
    detailedDescription: 'An intelligent research paper analyzer powered by Gemini 2.5 Pro. Users can provide links, PDFs, or URLs to get necessary information extracted from research papers. Features advanced AI processing for academic document analysis and information extraction.',
    category: 'Data Science',
    featured: true,
    createdDate: '2023-09-25',
    liveUrl: 'https://research-paper-analyzer-htn7.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/ai-wrapper',
    technologies: ['Python', 'Gemini AI', 'Flask', 'PDF Processing', 'NLP', 'API Integration'],
    imageUrls: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 9,
    title: 'Algotrader',
    description: 'Users can create algorithms to compete with Wall Street, backtest strategies on US stocks',
    detailedDescription: 'A sophisticated algorithmic trading platform where users can create their own trading algorithms to compete with Wall Street. Features include custom buy/sell constraints, stock categorization, strategy backtesting based on historical US stock data, and performance analytics.',
    category: 'Data Science',
    featured: true,
    createdDate: '2023-08-15',
    liveUrl: 'https://algotrade-v1.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/algotrade',
    technologies: ['Python', 'Flask', 'Pandas', 'NumPy', 'Financial APIs', 'Chart.js', 'Backtesting'],
    imageUrls: ['https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 10,
    title: '404 Space Shooter',
    description: 'A basic 404 page with space shooter browser game',
    detailedDescription: 'A creative 404 error page featuring an interactive space shooter game built directly in the browser. Instead of a boring error message, users can enjoy a fun retro-style space shooting game while they navigate back to the main site.',
    category: 'Game Development',
    featured: false,
    createdDate: '2023-07-20',
    liveUrl: 'https://four04-space-shooter.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/404_space_shooter',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Development'],
    imageUrls: ['https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 11,
    title: 'Personal Portfolio',
    description: 'Personal website of Shanid Sajjatuz Islam',
    detailedDescription: 'A comprehensive personal portfolio website showcasing projects, skills, and professional experience. Built with modern web technologies and featuring responsive design, smooth animations, and optimized performance.',
    category: 'Others',
    featured: true,
    createdDate: '2023-06-15',
    liveUrl: 'https://portfolio-of-shanid.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/Portfolio_v1',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrls: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 12,
    title: 'Calculator App',
    description: 'A basic calculator application',
    detailedDescription: 'A clean and functional calculator application built with modern web technologies. Features basic arithmetic operations with a user-friendly interface and responsive design.',
    category: 'Others',
    featured: false,
    createdDate: '2023-05-10',
    liveUrl: 'https://basic-calculator-uwvp.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/basic_calculator',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrls: ['https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  },
  {
    id: 13,
    title: 'Under Maintenance Website',
    description: 'A basic placeholder website for maintenance periods',
    detailedDescription: 'A professional under maintenance page template with clean design and informative messaging. Perfect for displaying during website updates or server maintenance periods.',
    category: 'Others',
    featured: false,
    createdDate: '2023-04-05',
    liveUrl: 'https://under-maintenance-website-page.onrender.com',
    repositoryUrl: 'https://github.com/perashanid/Under_maintenance_website_page',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrls: ['https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80']
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects = demoProjects;
  const categories = ['all', 'Web Application', 'Frontend', 'Backend', 'Data Science', 'Game Development', 'Others'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };



  return (
    <section id="projects" className="section-padding bg-light-sage/30 dark:bg-medium-gray">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-charcoal dark:text-light-sage">My Projects</h2>
          <div className="w-20 h-1 bg-warm-brown mx-auto mb-8"></div>
          <p className="text-medium-gray dark:text-light-sage/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
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
                  ? 'bg-warm-brown text-light-sage'
                  : 'bg-white dark:bg-dark-charcoal text-medium-gray dark:text-light-sage hover:bg-warm-brown/10 dark:hover:bg-dark-charcoal/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-medium-gray dark:text-light-sage/70 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-medium-gray rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-medium-gray/30 dark:border-light-sage/30">
                <h3 className="text-2xl font-bold text-dark-charcoal dark:text-light-sage">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-light-sage/20 dark:hover:bg-dark-charcoal rounded-full transition-colors text-medium-gray dark:text-light-sage"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image */}
                {selectedProject.imageUrls && selectedProject.imageUrls.length > 0 && (
                  <div className="mb-6">
                    <img
                      src={selectedProject.imageUrls[0]}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Project Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-3 text-dark-charcoal dark:text-light-sage">Description</h4>
                    <p className="text-medium-gray dark:text-light-sage/80 leading-relaxed mb-6">
                      {selectedProject.detailedDescription || selectedProject.description}
                    </p>

                    <h4 className="text-lg font-semibold mb-3 text-dark-charcoal dark:text-light-sage">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-warm-brown/20 dark:bg-warm-brown/30 text-warm-brown rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-dark-charcoal dark:text-light-sage">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-medium-gray dark:text-light-sage/80">
                        <Calendar size={16} />
                        {new Date(selectedProject.createdDate).toLocaleDateString()}
                      </div>
                      
                      <div className="text-sm text-medium-gray dark:text-light-sage/80">
                        <span className="font-medium">Category:</span>
                        <span className="ml-2 capitalize">{selectedProject.category}</span>
                      </div>

                      {selectedProject.featured && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-warm-brown/20 text-warm-brown rounded-full text-xs">
                          ⭐ Featured Project
                        </div>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="mt-6 space-y-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 btn-primary w-full justify-center"
                        >
                          <ExternalLink size={16} />
                          View Live Demo
                        </a>
                      )}
                      {selectedProject.repositoryUrl && (
                        <a
                          href={selectedProject.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 btn-secondary w-full justify-center"
                        >
                          <Github size={16} />
                          View Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;