# Generated by Django 3.1.1 on 2020-09-25 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exam', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='age',
            field=models.IntegerField(default=0),
        ),
    ]
