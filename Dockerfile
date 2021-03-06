FROM node:12-alpine

# Setting working directory.
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build
# Install PM2 globally
RUN npm install pm2 -g

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]
