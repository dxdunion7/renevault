# Generated by Django 4.1.2 on 2022-11-29 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_blog_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='message',
            field=models.TextField(),
        ),
    ]
