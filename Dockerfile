FROM node:22.3.0-alpine3.19

# Install the required npm version globally
RUN npm install -g npm@10.9.1

## Apply security fixes
RUN apk add --upgrade --no-cache libcrypto3=3.1.7-r1 \
    libssl3=3.1.7-r1 \
    busybox=1.36.1-r19

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies using npm
RUN npm ci

# Clear npm cache files to reduce the image size
RUN rm -rf /root/.npm/_cacache

# Copy the rest of the application code
COPY . .

# Generate the Prisma client
RUN npx prisma generate

# Expose the application port (3000)
EXPOSE 3000

# Build the application
RUN npm run build

# Set the command to run the application
CMD ["npm", "run", "start"]
