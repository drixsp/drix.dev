from django.db import models

# Create your models here.

# 1. User/Password
# 2. Portfolio
# 2.1 Title
# 2.2 Description
# 2.3 Image
# 3. Experience
# 3.1 Company
# 3.2 Duration
# 3.3 Job Position
# 3.4 Job Description

class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="portfolio_images")
    tags = models.CharField(null=True, blank=True, max_length=255)

    def __str__(self):
        return self.title


class Experience(models.Model):
    company = models.CharField(max_length=200)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    job_position = models.CharField(max_length=200)
    job_description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.job_position
