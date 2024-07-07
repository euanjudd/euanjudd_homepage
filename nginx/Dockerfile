FROM nginx:alpine

# Remove the default nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom settings nginx.conf to the container
COPY nginx.conf /etc/nginx/conf.d/

# Expose ports for HTTP and HTTPS
EXPOSE 80 443

# run nginx in foreground as docker may think it had stopped and shut it down if running in background
CMD ["nginx", "-g", "daemon off;"]
