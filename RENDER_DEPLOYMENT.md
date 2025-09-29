# Simple Render Deployment Guide

This is a simplified, single-service deployment that serves both frontend and backend from one Render service.

## Quick Deploy (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy to Render"
   git push origin main
   ```

2. **Deploy with Blueprint**:
   - Go to [dashboard.render.com](https://dashboard.render.com)
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will detect `render.yaml` and deploy automatically
   - Wait 5-10 minutes for build to complete

3. **Done!** Your portfolio will be live at `https://portfolio.onrender.com`

## What This Setup Does

- **Single Service**: One web service serves both frontend and backend
- **No CORS Issues**: Frontend and API are on the same domain
- **Automatic Builds**: React builds first, then Spring Boot includes it
- **Simple Configuration**: Minimal environment variables needed

## Manual Deploy (Alternative)

If you prefer manual setup:

1. **Create Web Service**:
   - Runtime: Java
   - Build Command: `cd frontend && npm ci && npm run build && cd ../backend && chmod +x ./mvnw && ./mvnw clean package -DskipTests`
   - Start Command: `cd backend && java -Dserver.port=$PORT -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar`

2. **Environment Variables**:
   ```
   SPRING_PROFILES_ACTIVE=production
   NODE_VERSION=18
   ```

## How It Works

1. **Build Process**:
   - Frontend builds to `frontend/dist`
   - Maven copies React build to Spring Boot's static resources
   - Spring Boot serves React app and API endpoints

2. **Routing**:
   - `/api/*` → Backend API endpoints
   - `/*` → React app (with client-side routing)

3. **No Separate Services**: Everything runs from one Java process

## Troubleshooting

- **Build fails**: Check Node.js version (18) and Java version (17)
- **App won't start**: Check environment variables
- **Routes don't work**: Verify WebConfig.java is properly configured

## Free Tier Notes

- Service sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds
- 500 build minutes per month
- 100GB bandwidth per month