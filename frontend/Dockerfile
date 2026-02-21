# ... (your base image setup)
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# --- THIS IS THE CRITICAL ADDITION ---
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
# -------------------------------------

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]