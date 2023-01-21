FROM nginx:alpine

RUN touch /var/run/nginx.pid \
  && chown -R nginx:nginx /var/run/nginx.pid \
  && chown -R nginx:nginx /var/cache/nginx
COPY default.conf /etc/nginx/conf.d/
EXPOSE 8080
USER nginx
