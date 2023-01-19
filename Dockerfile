# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install the app's dependencies
RUN yarn

# Copy the rest of the app's files
COPY . .

# Build the application
RUN yarn run build

# Specify the port that the app will listen on
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
