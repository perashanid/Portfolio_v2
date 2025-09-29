# Multi-stage build for full-stack application

# Stage 1: Build frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: Build backend with frontend
FROM openjdk:17-jdk-slim AS backend-build
WORKDIR /app

# Install Node.js for any additional frontend processing
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Copy backend files
COPY backend/ ./backend/
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

# Build backend (Maven will copy frontend files)
WORKDIR /app/backend
RUN chmod +x ./mvnw
RUN ./mvnw clean package -DskipTests

# Stage 3: Runtime
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=backend-build /app/backend/target/portfolio-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
CMD ["java", "-Dserver.port=${PORT:-8080}", "-jar", "app.jar"]