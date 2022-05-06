FROM node:lts

WORKDIR /usr/src/app

COPY . ./

RUN apt-get -qy update && apt-get -qy install openssl

RUN npm ci && npm run build

RUN npx prisma migrate dev && npx prisma generate

ARG PORT
ARG DATABASE_URL
ARG SMTP_HOST
ARG SMTP_PORT
ARG SMTP_USER
ARG SMTP_PASSWORD

EXPOSE $PORT
EXPOSE $DATABASE_URL
EXPOSE $SMTP_HOST
EXPOSE $SMTP_PORT
EXPOSE $SMTP_USER
EXPOSE $SMTP_PASSWORD


CMD [ "npm", "start" ]
