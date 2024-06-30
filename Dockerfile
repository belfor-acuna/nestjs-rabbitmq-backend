FROM node:22-alpine3.19

RUN apk update \
    && apk add --no-cache postgresql-client

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:prod"]    
