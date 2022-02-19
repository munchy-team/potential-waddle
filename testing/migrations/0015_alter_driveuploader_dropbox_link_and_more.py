# Generated by Django 4.0.2 on 2022-02-19 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testing', '0014_alter_driveuploader_dropbox_link_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='driveuploader',
            name='Dropbox_Link',
            field=models.CharField(blank=True, choices=[('dropbox.com', 'dropbox.com'), ('https://www.dropbox.com/home/folder1', 'https://www.dropbox.com/home/folder1')], help_text='If file is on Dropbox, select dropbox.com,or "https://www.dropbox.com/home/folder1" otherwise leave blank.', max_length=50),
        ),
        migrations.AlterField(
            model_name='driveuploader',
            name='File_Location',
            field=models.CharField(blank=True, choices=[('OneDrive', 'OneDrive'), ('Dropbox', 'Dropbox'), ('Google Drive', 'Google Drive')], max_length=50),
        ),
        migrations.AlterField(
            model_name='driveuploader',
            name='drive_file_link',
            field=models.URLField(blank=True, help_text='If file is on Dropbox, go to Dropbox Link and select dropbox.com or "https://www.dropbox.com/home/folder1". Otherwise, leave "Dropbox Link" blank.', max_length=1000),
        ),
    ]
