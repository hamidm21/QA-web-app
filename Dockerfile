FROM node:latest
# Create application directory
RUN mkdir -p /usr/src/app
# Change current working directory to app directory
WORKDIR /usr/src/app
# Copy pakage.json to workdir and installing dependencies
COPY package.json /usr/src/app/
# Install all dependencies
RUN npm i
# Copy the code to workdir
COPY . /usr/src/app/
# Build project
RUN npm run build

EXPOSE 2121 8989

CMD ["npm", "run", "start"]