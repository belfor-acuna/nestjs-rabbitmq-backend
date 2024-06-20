# Dockerfile

FROM node:22-alpine3.19
# Instala PostgreSQL
RUN apk add --no-cache postgresql-client postgresql

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de la aplicación
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación Nest.js se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
