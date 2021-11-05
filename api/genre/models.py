from django.db import models

class Genre(models.Model):
    name = models.CharField('Genre Name', max_length=50)

    def __str__(self):
        return self.name


