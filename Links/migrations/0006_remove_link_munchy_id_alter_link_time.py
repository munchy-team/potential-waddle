# Generated by Django 4.0.2 on 2022-02-19 03:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Links', '0005_link_munchy_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='link',
            name='Munchy_ID',
        ),
        migrations.AlterField(
            model_name='link',
            name='Time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
