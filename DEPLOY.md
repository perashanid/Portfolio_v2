# Complete Render Deployment Guide

## Prerequisites
- GitHub account with your code pushed
- Render account (free at render.com)

## Step 1: Prepare Your Repository
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

## Step 2: Create Render Account & Deploy

### 2.1 Sign Up/Login to Render
1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended) or email
4. Verify your email if needed

### 2.2 Connect GitHub Repository
1. On Render dashboard, click "New +" button (top right)
2. Select "Blueprint" from dropdown
3. Click "Connect GitHub" if not already connected
4. Authorize Render to access your repositories
5. Find and select your portfolio repository
6. Click "Connect"

### 2.3 Deploy with Blueprint
1. Render will detect your `render.yaml` file automatically
2. You'll see a preview showing:
   - Service Name: portfolio
   - Service Type: Web Service
   - Runtime: Node
   - Plan: Free
3. Click "Apply" button
4. Render will start building your app

### 2.4 Monitor Deployment
1. You'll be redirected to the deployment logs
2. Watch the build process (takes 2-4 minutes):
   - Installing dependencies
   - Building frontend
   - Starting server
3. When complete, you'll see "Deploy succeeded"
4. Your app URL will be: `https://portfolio-[random-string].onrender.com`

## Step 3: Verify Deployment
1. Click the generated URL
2. Test all pages and functionality
3. Check that API endpoints work (projects, contact form)

## Step 4: Custom Domain (Optional)
1. In your service dashboard, click "Settings"
2. Scroll to "Custom Domains"
3. Click "Add Custom Domain"
4. Enter your domain name
5. Follow DNS configuration instructions

## Troubleshooting

### "Cannot find module 'express'" Error?
**FIXED!** Updated render.yaml to install dependencies first:
```yaml
buildCommand: npm install && npm run build
```

### Build Fails?
- Check logs for specific errors
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### App Won't Start?
- Check that PORT environment variable is used
- Verify server.js serves static files correctly
- Ensure all file paths are correct

### 404 Errors?
- Check that catch-all route serves index.html
- Verify frontend build output is in dist/ folder

## Auto-Deploy Setup
- Render automatically deploys when you push to main branch
- No additional configuration needed
- Check "Auto-Deploy" is enabled in Settings

## Environment Variables (If Needed)
1. Go to service Settings
2. Scroll to "Environment Variables"
3. Add any additional variables
4. Click "Save Changes"

## Free Plan Limitations
- Service sleeps after 15 minutes of inactivity
- First request after sleep takes 30+ seconds
- 750 hours/month limit (enough for personal projects)

## Your App is Live! 🎉
URL: Check your Render dashboard for the exact URL