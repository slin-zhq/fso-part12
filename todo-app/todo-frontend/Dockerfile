FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm install

USER node
ENV REACT_APP_BACKEND_URL=http://localhost:3003
CMD npm start