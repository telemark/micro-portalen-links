# Setting the base to nodejs 8.9.3
FROM node:8.9.3-alpine@sha256:490cdf2bce8b6d2399f6af238a3f93422fd03457dded90f1a057dad7870b99b8

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

ENV NODE_ENV production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start