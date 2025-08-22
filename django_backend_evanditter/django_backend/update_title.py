#!/usr/bin/env python
import os
import sys
import django

# Add the project directory to the Python path
sys.path.append('/Users/evanditter/git/evanditter_website/django_backend_evanditter/django_backend')

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_evanditter.settings')
django.setup()

from portfolioapp.models import PersonalInfo

# Update the title in PersonalInfo
try:
    personal_info = PersonalInfo.objects.first()
    if personal_info:
        print(f"Current title: {personal_info.title}")
        
        # Update the title
        personal_info.title = 'Machine Learning Engineer & Technologist'
        personal_info.save()
        print(f"Updated title to: {personal_info.title}")
    else:
        print("No PersonalInfo found - creating new record")
        # Create PersonalInfo with new title
        PersonalInfo.objects.create(
            name='Evan Ditter',
            title='Machine Learning Engineer & Technologist',
            bio='Machine Learning Engineer and technologist passionate about creating innovative solutions.',
            email='evan@evanditter.com',
            linkedin_url='https://linkedin.com/in/evanditter',
            github_url='https://github.com/evanditter',
            twitter_url='https://x.com/evan_ditter',
            instagram_url='https://www.instagram.com/evan_ditter/',
        )
        print("Created PersonalInfo with new title")
        
except Exception as e:
    print(f"Error: {e}")
