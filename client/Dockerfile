FROM node:20 as main
RUN apt-get update && apt-get upgrade -y

FROM main as dependencies
WORKDIR /client
COPY package.json package-lock.json ./
RUN npm install

FROM main as app
WORKDIR /client
COPY . .
COPY --from=dependencies /client/node_modules ./node_modules
EXPOSE 3001
CMD npm run prod
