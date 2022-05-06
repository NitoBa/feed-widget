FROM node:lts

WORKDIR /usr/src/app

COPY . ./

RUN apt-get -qy update && apt-get -qy install openssl

RUN npm ci && npm run build

RUN npx prisma migrate dev && npx prisma generate

ARG PORT
ENV $PORT=3333

EXPOSE $PORT

CMD [ "npm", "start" ]
