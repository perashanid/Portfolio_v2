# Test Build Locally (Optional)

Before deploying to Render, you can test the build process locally:

## Test Backend Build
```bash
cd backend
chmod +x ./mvnw
./mvnw clean package -DskipTests
```

Expected output: `BUILD SUCCESS` and `target/portfolio-backend-0.0.1-SNAPSHOT.jar` file created

## Test Frontend Build
```bash
cd frontend
npm ci
npm run build
```

Expected output: `dist/` folder created with built files

## Test Backend Run (Optional)
```bash
cd backend
java -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar
```

Should start on port 8080 (Ctrl+C to stop)

## If Builds Fail Locally
- **Backend**: Check Java version (`java -version` should be 17+)
- **Frontend**: Check Node version (`node -v` should be 18+)
- **Maven**: Ensure Maven wrapper has execute permissions