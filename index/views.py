from django.shortcuts import render
# Create your views here.


def start(request):
    return render(request, "index.html")


def heritage(request):
    return render(request, "heritage.html")


def contact(request):
    return render(request, "contact.html")
