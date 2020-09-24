from django.contrib import admin
from .models import TodoGroup, Todo, FavouriteGroup, Favourite

# Register your models here.


@admin.register(TodoGroup)
class TodoGroupAdmin(admin.ModelAdmin):
    list_display = ["name"]

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ["name", "status", "end_date", "group"]


@admin.register(FavouriteGroup)
class FavouriteGroupAdmin(admin.ModelAdmin):
    list_display = ["name"]

@admin.register(Favourite)
class FavouriteAdmin(admin.ModelAdmin):
    list_display = ["name", "url", "memo", "group"]