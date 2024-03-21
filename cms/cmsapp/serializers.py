from rest_framework import serializers
from .models import *


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ['id', 'title', 'content', 'image']


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'start_date', 'end_date',
                  'job_position', 'job_description']