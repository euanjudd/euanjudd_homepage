from django.urls import path
from . import views

urlpatterns = [
    path('', views.suumo_prediction_form, name='suumo_prediction_form'),
]