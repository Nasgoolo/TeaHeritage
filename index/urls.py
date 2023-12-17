from django.urls import path
from .views import start, heritage, contact

urlpatterns = [
    path('', start, name='start_page'),
    path('heritage', heritage, name='heritage'),
    path('contact', contact, name='contact'),
    ]
