from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils.translation import deactivate

class User(models.Model):
    discord_id = models.BigIntegerField(primary_key=True ,unique=True)
    discord_tag = models.CharField(max_length=100)
    avatar = models.CharField(null=True, max_length=100, blank=True)
    status = models.BooleanField(default= False)
    xp = models.IntegerField(default= 0)
    coins = models.PositiveIntegerField(default=0)
    tress_unlocked = ArrayField(models.IntegerField())

    def __str__(self):
        return self.discord_tag


class Tree(models.Model):
    tree_id = models.IntegerField(primary_key=True,unique=True)
    tree_name = models.CharField(max_length=100)
    tree_url = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    xp_plant = models.IntegerField(default=0)
    time_plant = models.IntegerField(default=0)
    VERSION = (
        ("V1", "Version1"),
        ("V2", "Version2"),
        ("V3", "Version3"),
    )
    version_level = models.CharField(choices=VERSION, max_length=255)

    def __str__(self):
        return self.tree_name















# Create your models here.
