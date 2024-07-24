import requests
from django.shortcuts import render
from django.http import JsonResponse


############################################
# SUUMO PRICE PREDICTION
############################################

def suumo_prediction_form(request):
    if request.method == 'POST':
        url = request.POST.get('url')
        response = requests.post('http://localhost:5000/predict', json={'url': url})
        prediction = response.json().get('prediction')  # Get the prediction safely

        return JsonResponse({'prediction': prediction})

    return render(request, 'ml_projects/suumo_prediction_form.html')
