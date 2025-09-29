# Render Deployment Guide for Portfolio

This guide provides step-by-step instructions to deploy your portfolio on Render.

## Prerequisites

1. **GitHub Account**: Your code must be in a GitHub repository
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Repository Access**: Make sure your repository is public or you've granted Render access

## Project Structure

Your project has two main components:
- **Frontend**: React + TypeScript + Vite (in `/frontend` folder)
- **Backend**: Spring Boot + Java 17 (in `/backend` folder)

## Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. **Push all changes to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Verify files are in place**:
   - `render.yaml` (root directory)
   - `backend/mvnw` and `backend/mvnw.cmd` (Maven wrapper)
   - `backend/.mvn/wrapper/maven-wrapper.properties`
   - `backend/src/main/resources/application-production.properties`

### Step 2: Deploy Backend Service

1. **Go to Render Dashboard**:
   - Visit [dashboard.render.com](https://dashboard.render.com)
   - Click "New +" → "Web Service"

2. **Connect Repository**:
   - Select "Build and deploy from a Git repository"
   - Connect your GitHub account if not already connected
   - Select your portfolio repository

3. **Configure Backend Service**:
   - **Name**: `portfolio-backend`
   - **Runtime**: `Java`
   - **Build Command**: `cd backend && chmod +x ./mvnw && ./mvnw clean package -DskipTests`
   - **Start Command**: `cd backend && java -Dserver.port=$PORT -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar`
   - **Plan**: `Free`

4. **Set Environment Variables**:
   Click "Advanced" and add these environment variables:
   ```
   SPRING_PROFILES_ACTIVE=production
   SPRING_DATASOURCE_URL=jdbc:h2:mem:portfoliodb
   SPRING_DATASOURCE_DRIVER_CLASS_NAME=org.h2.Driver
   SPRING_JPA_DATABASE_PLATFORM=org.hibernate.dialect.H2Dialect
   SPRING_JPA_HIBERNATE_DDL_AUTO=create-drop
   SPRING_H2_CONSOLE_ENABLED=false
   ```
   
   **Note**: Don't set SERVER_PORT manually - Render will set the PORT environment variable automatically.

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete (5-10 minutes)
   - Note the backend URL (e.g., `https://portfolio-backend.onrender.com`)

### Step 3: Deploy Frontend Service

1. **Create New Static Site**:
   - Click "New +" → "Static Site"
   - Select the same repository

2. **Configure Frontend Service**:
   - **Name**: `portfolio-frontend`
   - **Build Command**: `cd frontend && npm ci && npm run build`
   - **Publish Directory**: `frontend/dist`
   - **Plan**: `Free`

3. **Set Environment Variables**:
   ```
   NODE_VERSION=18
   ```

4. **Deploy**:
   - Click "Create Static Site"
   - Wait for deployment to complete (3-5 minutes)
   - Note the frontend URL (e.g., `https://portfolio-frontend.onrender.com`)

### Step 4: Update CORS Configuration

1. **Update Backend CORS**:
   - Go to your backend service dashboard
   - Click "Environment"
   - Add/Update environment variable:
     ```
     CORS_ALLOWED_ORIGINS=https://portfolio-frontend.onrender.com,http://localhost:3000,http://localhost:5173
     ```

2. **Redeploy Backend**:
   - Go to "Manual Deploy" → "Deploy latest commit"

### Step 5: Configure Frontend API Calls

1. **Update API Base URL** (if needed):
   - In your frontend code, ensure API calls point to your backend URL
   - Create a `.env.production` file in frontend folder:
     ```
     VITE_API_BASE_URL=https://portfolio-backend.onrender.com
     ```

2. **Redeploy Frontend**:
   - Go to frontend service dashboard
   - Click "Manual Deploy" → "Deploy latest commit"

## Alternative: Using render.yaml (Recommended)

Instead of manual setup, you can use the `render.yaml` file:

1. **Go to Render Dashboard**
2. **Click "New +" → "Blueprint"**
3. **Connect Repository** and select your portfolio repo
4. **Render will automatically detect** the `render.yaml` file
5. **Review Services**:
   - portfolio-backend (Web Service)
   - portfolio-frontend (Static Site)
6. **Click "Apply"**
7. **Wait for both services to deploy**

## Important URLs to Update

After deployment, update these URLs in your project:

1. **In all backend controllers**, update `@CrossOrigin` to include:
   ```java
   @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "https://portfolio-frontend.onrender.com"})
   ```

2. **In frontend environment variables**:
   ```
   VITE_API_BASE_URL=https://portfolio-backend.onrender.com
   ```

## Troubleshooting

### Backend Issues:
- **Build fails**: Check Java version (should be 17)
- **App won't start**: Check environment variables
- **Database errors**: Verify H2 configuration

### Frontend Issues:
- **Build fails**: Check Node version (should be 18)
- **API calls fail**: Verify CORS configuration
- **Routes don't work**: Check build output directory

### General Issues:
- **Services sleep**: Free tier services sleep after 15 minutes of inactivity
- **Cold starts**: First request after sleep takes 30-60 seconds
- **Build timeouts**: Free tier has 10-minute build timeout

## Free Tier Limitations

- **Build time**: 10 minutes max
- **Sleep**: Services sleep after 15 minutes of inactivity
- **Bandwidth**: 100GB/month
- **Build minutes**: 500 minutes/month

## Post-Deployment Checklist

- [ ] Backend service is running and accessible
- [ ] Frontend service is deployed and accessible
- [ ] API calls from frontend to backend work
- [ ] All project links and images load correctly
- [ ] Contact form works (if implemented)
- [ ] All navigation works properly

## Your Deployed URLs

After deployment, your portfolio will be available at:
- **Frontend**: `https://portfolio-frontend.onrender.com`
- **Backend API**: `https://portfolio-backend.onrender.com`

## Custom Domain (Optional)

To use a custom domain:
1. Go to your frontend service settings
2. Click "Custom Domains"
3. Add your domain
4. Update DNS records as instructed
5. SSL certificate will be automatically provisioned

---

**Note**: Replace `portfolio-frontend` and `portfolio-backend` with your actual service names if different.