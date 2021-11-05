from django.urls import path

from .views import (
   GenreListApiView
)

app_name = 'genre_app'

urlpatterns = [
    path('api/genres/', GenreListApiView.as_view()),
]
