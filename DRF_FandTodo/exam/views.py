from django.shortcuts import render
from .models import Country, Customer
from rest_framework import status, viewsets
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from .serializers import (
    CountrySerializer,
    CustomerSerializer
)

# Create your views here.

class CountryView(ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class CustomerView(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
