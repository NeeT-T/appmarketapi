FROM node:16.5.0-alpine
LABEL maintainer="Renato S. Oliveira"
RUN mkdir -p /app
WORKDIR /app
COPY . /app/
RUN npm install --no-save
EXPOSE 4008
ENTRYPOINT npm start