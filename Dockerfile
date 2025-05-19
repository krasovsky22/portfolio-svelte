# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install necessary build tools
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy project files
COPY . .

# Build the project
RUN yarn prepare && yarn build

# Production stage
EXPOSE 5000

ENV HOST=127.0.0.1

CMD ["yarn", "dev", "--port", "5000", "--host"]
