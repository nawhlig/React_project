from django.contrib import admin
from .models import Country, Customer
# Register your models here.

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ["nation"]

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ["name", "age", "sex", "nation"]