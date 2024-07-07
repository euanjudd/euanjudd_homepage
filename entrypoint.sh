#!/bin/bash

if [ "$DJANGO_ENVIRONMENT" = "development" ]; then
    echo "Running in development mode"
    exec python manage.py runserver 0.0.0.0:8000
else
    echo "Running in production mode"
    exec gunicorn --bind 0.0.0.0:8000 myproject.wsgi:application
fi