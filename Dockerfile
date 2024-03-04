# Use an official Node.js image as the base image
# FROM node:18.14.0-alpine as builder
FROM node:20.11.1-alpine AS nuxt-app

# Set the working directory in the container
WORKDIR /app

# install required packages for node image
RUN apk --no-cache add openssh g++ make python3 git

# Copy the package.json file and pnpm.lock file
COPY package.json pnpm.lock ./

# Install the dependencies using pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# build the project
RUN pnpm nuxi prepare
RUN pnpm build

# start final image
# FROM node:18.14.0-alpine as ams-web

# COPY --from=builder /app /app

# Set environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Expose the app's default port
EXPOSE 3000

# Set the working directory in the container
# WORKDIR /app

# Start the app
# CMD ["node", ".output/server/index.mjs"]
CMD [ "pnpm", "preview" ]
