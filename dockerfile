 FROM node:15.8.0

 WORKDIR /app

 COPY package.json package-lock.json ./


 RUN npm install

 COPY . .

 EXPOSE 5000

 EXPOSE 3001
 

 CMD ["node","index.js"]
