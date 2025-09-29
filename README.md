# Portfolio Website

A modern, full-stack portfolio website built with React and Spring Boot.

## Features

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Spring Boot + H2 Database
- **Single Service**: Frontend and backend served from one application
- **Responsive Design**: Works on all devices
- **Contact Form**: Functional contact form with email integration

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
   - Backend: http://localhost:8080

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
├── backend/           # Spring Boot application
│   ├── src/
│   ├── pom.xml
│   └── mvnw
├── render.yaml        # Render deployment config
└── README.md
```

## How It Works

1. **Build Process**: React builds to `frontend/dist`, Maven copies it to Spring Boot's static resources
2. **Routing**: `/api/*` goes to backend, everything else serves React app
3. **No CORS**: Frontend and API are on the same domain

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Spring Boot 3, Java 17, H2 Database
- **Deployment**: Render (single service)

## Environment Variables

Production automatically uses:
- `SPRING_PROFILES_ACTIVE=production`
- `NODE_VERSION=18`

## License

MIT