FROM node:8
WORKDIR /usr/src/app
ARG PORT=8080
#ENV PORT 8080
RUN echo $PORT
EXPOSE $PORT
COPY . .
RUN npm install
ENTRYPOINT echo $PORT
