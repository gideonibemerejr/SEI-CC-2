from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return HttpResponse('<h1>Home Page</h1>')


def about(request):
    return render(request, 'about/about.html', {'title': 'About Cat Collector'})
# Create your views here.
