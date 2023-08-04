# Use the official Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to leverage Docker cache
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Node.js application listens
EXPOSE 3000

# Define the command to start your Node.js application
CMD ["node", "app.js"]