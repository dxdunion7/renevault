# Generated by Django 4.1.2 on 2023-01-20 20:59

import account.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0019_user_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='paul_date',
            field=models.DateField(default=account.models.return_date_time),
        ),
    ]
