
# Stage 1
FROM node:10
WORKDIR /usr/src/app
COPY . ./
RUN yarn