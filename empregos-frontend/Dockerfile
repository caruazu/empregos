FROM node:20-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli@18

RUN npm install

CMD ["npm", "run", "start", "--host", "0.0.0.0"]
