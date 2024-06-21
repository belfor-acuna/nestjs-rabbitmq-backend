# Usar imagen base
FROM node:22-alpine3.19

# Instalar paquetes necesarios (ejemplo con PostgreSQL client)
RUN apk update \
    && apk add --no-cache postgresql-client

# Resto de tu Dockerfile
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
