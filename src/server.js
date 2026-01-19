const express = require('express');
const path = require('path');
const cors = require('cors');
const net = require('net');

const app = express();
const PREFERRED_PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Sample data (replace with database later)
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Node.js",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    imageUrl: "https://via.placeholder.com/400x300"
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Full-stack e-commerce application with payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://yourecommerce.com",
    imageUrl: "https://via.placeholder.com/400x300"
  }
];

// API Routes
app.get('/api/projects', (req, res) => {
  const { category, featured } = req.query;
  let filteredProjects = projects;
  
  if (category) {
    filteredProjects = filteredProjects.filter(p => p.category === category);
  }
  
  if (featured === 'true') {
    filteredProjects = filteredProjects.filter(p => p.featured);
  }
  
  res.json(filteredProjects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I\'ll get back to you soon.' 
  });
});

// Function to check if port is available
const isPortAvailable = (port) => {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.listen(port, '0.0.0.0', () => {
      server.once('close', () => {
        resolve(true);
      });
      server.close();
    });
    
    server.on('error', () => {
      resolve(false);
    });
  });
};

// Function to find available port
const findAvailablePort = async (startPort, maxAttempts = 10) => {
  for (let i = 0; i < maxAttempts; i++) {
    const port = startPort + i;
    const available = await isPortAvailable(port);
    if (available) {
      return port;
    }
    console.log(`Port ${port} is busy, trying next port...`);
  }
  throw new Error(`No available port found after ${maxAttempts} attempts starting from ${startPort}`);
};

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Start server with automatic port finding
const startServer = async () => {
  try {
    const PORT = await findAvailablePort(PREFERRED_PORT);
    
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
      console.log(`📱 Access your app at: http://135.235.169.147:${PORT}`);
      if (PORT !== PREFERRED_PORT) {
        console.log(`⚠️  Note: Preferred port ${PREFERRED_PORT} was busy, using port ${PORT} instead`);
      }
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();