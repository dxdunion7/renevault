# Generated by Django 4.1.2 on 2023-01-20 21:09

import account.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0021_remove_user_paul_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='paul_date',
            field=models.DateField(default=account.models.return_date_time),
        ),
    ]
