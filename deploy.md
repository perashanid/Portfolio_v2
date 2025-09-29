# Quick Deployment Commands

## Before Deployment
1. Commit all changes:
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

## Render Deployment Options

### Option 1: Using render.yaml (Recommended)
1. Go to [render.com](https://render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will detect `render.yaml` and create both services automatically

### Option 2: Manual Setup
Follow the detailed steps in `RENDER_DEPLOYMENT.md`

## Important Service Names
- Backend: `portfolio-backend`
- Frontend: `portfolio-frontend`

## Expected URLs After Deployment
- Frontend: `https://portfolio-frontend.onrender.com`
- Backend: `https://portfolio-backend.onrender.com`

## Environment Variables Needed

### Backend:
```
SPRING_PROFILES_ACTIVE=production
```
*Note: PORT is automatically set by Render*

### Frontend:
```
NODE_VERSION=18
```