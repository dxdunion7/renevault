# Generated by Django 4.1.2 on 2023-01-20 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_alter_blog_message'),
    ]

    operations = [
        migrations.AddField(
            model_name='history',
            name='description',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='history',
            name='receiver_bank',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='history',
            name='receiver_name',
            field=models.CharField(default='', max_length=100),
        ),
    ]
