FROM node:21.6.0-alpine3.19

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire application
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run your app
CMD ["npm", "run", "dev"]