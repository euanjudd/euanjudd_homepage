FROM nginx:alpine

# Remove the default nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom settings nginx.conf to the container
COPY nginx.conf /etc/nginx/conf.d/

# Create directories for SSL certificates
RUN mkdir -p /etc/letsencrypt/live/euanjudd.com

# Expose ports for HTTP and HTTPS
EXPOSE 80 443

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]