FROM node:8
WORKDIR /usr/src/app
ENV PORT $PORT
EXPOSE $PORT
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "start" ]