from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView
)

from .serializers import GenreSerializer
from .models import Genre

class GenreListApiView(ListAPIView):
    serializer_class = GenreSerializer

    def get_queryset(self):
        return Genre.objects.all()