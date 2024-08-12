FROM node:20 as main
RUN apt-get update && apt-get upgrade -y

FROM main as dependencies
WORKDIR /server
COPY package.json package-lock.json ./
RUN npm install

FROM main as app
WORKDIR /server
COPY . .
COPY --from=dependencies /server/node_modules ./node_modules
EXPOSE 3000
CMD npm run prod
