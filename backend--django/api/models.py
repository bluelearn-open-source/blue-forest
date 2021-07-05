from django.db import models
from django.contrib.postgres.fields import ArrayField

class User(models.Model):
    discord_id = models.BigIntegerField(primary_key=True ,unique=True)
    discord_tag = models.CharField(max_length=100)
    avatar = models.CharField(null=True, max_length=100, blank=True)
    status = models.BooleanField(default= False)
    xp = models.IntegerField(default= 0)
    coins = models.PositiveIntegerField(default=0)
    tress_unlocked = ArrayField(models.IntegerField())

# Create your models here.
def __str__(self):
    return self.discord_tag