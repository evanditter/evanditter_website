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

# Check if PersonalInfo exists and has Instagram URL
try:
    personal_info = PersonalInfo.objects.first()
    if personal_info:
        print(f"PersonalInfo found: {personal_info.name}")
        print(f"Instagram URL: {personal_info.instagram_url}")
        print(f"Twitter URL: {personal_info.twitter_url}")
        
        # If no Instagram URL, add one
        if not personal_info.instagram_url:
            personal_info.instagram_url = 'https://www.instagram.com/evan_ditter/'
            personal_info.save()
            print("Added Instagram URL")
        else:
            print("Instagram URL already exists")
            
        # Fix Twitter URL if incorrect
        if personal_info.twitter_url == 'https://x.com/evanditter':
            personal_info.twitter_url = 'https://x.com/evan_ditter'
            personal_info.save()
            print("Fixed Twitter URL")
        elif personal_info.twitter_url:
            print(f"Twitter URL is: {personal_info.twitter_url}")
        else:
            personal_info.twitter_url = 'https://x.com/evan_ditter'
            personal_info.save()
            print("Added Twitter URL")
    else:
        print("No PersonalInfo found")
        # Create PersonalInfo with Instagram URL
        PersonalInfo.objects.create(
            name='Evan Ditter',
            title='Machine Learning Engineer | Data Engineer | Technologist',
            bio='Machine Learning Engineer passionate about creating innovative solutions.',
            email='evan@evanditter.com',
            linkedin_url='https://linkedin.com/in/evanditter',
            github_url='https://github.com/evanditter',
            twitter_url='https://x.com/evan_ditter',
            instagram_url='https://www.instagram.com/evan_ditter/',
        )
        print("Created PersonalInfo with Instagram URL")
        
except Exception as e:
    print(f"Error: {e}")
