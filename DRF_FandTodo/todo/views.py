from django.shortcuts import render
from .models import TodoGroup, Todo
from rest_framework import status, viewsets
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from .serializers import (
    TodoGroupSerializer,
    TodoSerializer,        
)

# Create your views here.



class TodoGroupView(ModelViewSet):
    queryset = TodoGroup.objects.all()
    serializer_class = TodoGroupSerializer

class TodoView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
