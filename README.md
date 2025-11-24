# Portfolio Website

A modern, full-stack portfolio website built with React and Node.js.

## Features

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Single Service**: Frontend and backend served from one application
- **Responsive Design**: Works on all devices
- **Contact Form**: Functional contact form
- **Fast Deployment**: Simple Node.js deployment

## Quick Start

### Development

1. **Install dependencies**:
   ```bash
   npm run install:all
   ```

2. **Run development servers**:
   ```bash
   npm run dev
   ```

   This starts:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

### Production Deploy

**Deploy to Render** (Recommended):

1. Push to GitHub
2. Go to [render.com](https://render.com)
3. Create new "Blueprint" 
4. Connect your repository
5. Deploy automatically with `render.yaml`

Your site will be live at `https://your-app-name.onrender.com`

## Project Structure

```
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── server.js          # Node.js Express server
├── render.yaml        # Render deployment config
└── README.md
```

## How It Works

1. **Build Process**: React builds to `frontend/dist`, Node.js serves static files
2. **Routing**: `/api/*` goes to Express server, everything else serves React app
3. **No CORS**: Frontend and API are on the same domain

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Deployment**: Render (single service)

## API Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/contact` - Submit contact form

## Environment Variables

Production automatically uses:
- `NODE_ENV=production`

## License

MIT