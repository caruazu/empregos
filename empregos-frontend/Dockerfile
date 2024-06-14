FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @angular/cli@18

EXPOSE 4200

CMD ["ng","serve", "--host", "0.0.0.0", "--proxy-config", "proxy.conf.js"]
