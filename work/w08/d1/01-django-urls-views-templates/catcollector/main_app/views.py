from django.shortcuts import render
from django.http import HttpResponse
from .models import Cat, cats


def home(request):
    return HttpResponse('<h1>Home Page</h1>')


def about(request):
    return render(request, 'about.html', {'title': 'About Cat Collector'})
# Create your views here.


def cats_index(request):
    return render(request, 'cats/index.html', {'title': 'Cats | Cat Collector', 'cats': cats})
