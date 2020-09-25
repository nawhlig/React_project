from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.


class Country(models.Model):
    seq = models.AutoField(primary_key=True)
    nation = models.CharField(max_length=10)
    del_yn = models.BooleanField(default=False)    
    #관리자 페이지에서 드롭메뉴 object 뜨는것 값으로 바꾸기
    def __str__(self):
        return self.nation;

class Customer(models.Model):
    seq = models.AutoField(primary_key=True)
    age = models.IntegerField(default=0)
    sex = models.CharField(max_length=6)
    name = models.CharField(max_length=10)
    del_yn = models.BooleanField(default=False)
    nation = models.ForeignKey(Country, on_delete=models.CASCADE) #외래키사용
    def __str__(self):
        return self.nation;