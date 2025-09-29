# Deploy to Render - Simple Steps

## 1. Push to GitHub
```bash
git add .
git commit -m "Deploy to Render"
git push origin main
```

## 2. Deploy on Render
1. Go to [render.com](https://render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repo
4. Click "Apply" (Render detects `render.yaml`)
5. Wait 5-10 minutes

## 3. Done!
Your portfolio will be live at: `https://portfolio.onrender.com`

## That's it!
- No CORS configuration needed
- No separate frontend/backend services
- No complex Docker setup
- Just one simple service serving everything

## If you need to make changes:
1. Edit your code
2. Push to GitHub
3. Render auto-deploys

## Local development:
```bash
npm run install:all  # Install dependencies
npm run dev          # Start dev servers
```