FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
ENV CI=true
RUN npm install

ENV CI=true
RUN npm test

USER node
ENV REACT_APP_BACKEND_URL=http://localhost:3003
CMD npm start