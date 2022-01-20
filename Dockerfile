FROM node:12-stretch as builder

RUN mkdir -p /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# COPY .env /app
COPY . /app

# ENV NODE_OPTIONS=--max-old-space-size=8192

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silen
RUN npm install


RUN npm run build

FROM nginx:mainline

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d
COPY .htpasswd /etc/nginx/
COPY conf /etc/nginx
