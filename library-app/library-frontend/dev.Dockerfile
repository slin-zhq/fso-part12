FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
ENV CI=true
RUN npm install

USER node
ENV BACKEND_SUB_URL=localhost:8082/api
CMD npm start