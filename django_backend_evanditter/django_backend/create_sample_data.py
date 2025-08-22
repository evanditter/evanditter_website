#!/usr/bin/env python
import os
import sys
import django

# Add the project directory to the Python path
sys.path.append('/Users/evanditter/git/evanditter_website/django_backend_evanditter/django_backend')

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_evanditter.settings')
django.setup()

from portfolioapp.models import PersonalInfo, Project, Skill, Experience, Education, Course

# Create or update PersonalInfo
personal_info, created = PersonalInfo.objects.get_or_create(
    defaults={
        'name': 'Evan Ditter',
        'title': 'Machine Learning Engineer | Data Engineer | Technologist',
        'bio': 'Machine Learning Engineer passionate about creating innovative solutions.',
        'email': 'evan@evanditter.com',
        'phone': '+1 (763) 367-0379',
        'location': 'New York, NY',
        'linkedin_url': 'https://linkedin.com/in/evanditter',
        'github_url': 'https://github.com/evanditter',
        'twitter_url': 'https://x.com/evan_ditter',
        'instagram_url': 'https://www.instagram.com/evan_ditter/',
        # Note: resume_file and profile_image are FileFields that would need actual files
        # For now, we'll leave them empty
    }
)

if created:
    print("Created PersonalInfo")
else:
    print("PersonalInfo already exists - updating fields")
    # Update existing record with current values
    personal_info.name = 'Evan Ditter'
    personal_info.title = 'Machine Learning Engineer | Data Engineer | Technologist'
    personal_info.bio = 'Machine Learning Engineer passionate about creating innovative solutions.'
    personal_info.email = 'evan@evanditter.com'
    personal_info.phone = '+1 (763) 367-0379'
    personal_info.location = 'New York, NY'
    personal_info.linkedin_url = 'https://linkedin.com/in/evanditter'
    personal_info.github_url = 'https://github.com/evanditter'
    personal_info.twitter_url = 'https://x.com/evan_ditter'
    personal_info.instagram_url = 'https://www.instagram.com/evan_ditter/'
    personal_info.save()
    print("Updated PersonalInfo with latest data")

# Create some sample projects
projects_data = [
    {
        'title': 'evanditter.com',
        'description': 'A full-stack web-app built with Django and React. This project demonstrates modern web development practices using Django REST Framework for the backend API and React for the frontend user interface.',
        'slug': 'ecommerce-platform',
        'category': 'Full Stack',
        'technologies': 'Django, React, PostgreSQL, Redis, Stripe API',
        'is_featured': True,
        'github_url': 'https://github.com/evanditter/ecommerce',
        'live_demo_url': 'https://demo.evanditter.com/ecommerce'
    },
    {
        'title': 'Machine Learning Dashboard',
        'description': 'Interactive dashboard for visualizing ML model performance and data analytics. Built with Python, Streamlit, and various ML libraries for comprehensive data visualization. Features real-time model monitoring, performance metrics, and interactive charts for data exploration.',
        'short_description': 'Interactive ML dashboard for model performance visualization',
        'slug': 'ml-dashboard',
        'category': 'Machine Learning',
        'technologies': 'Python, Streamlit, Pandas, Scikit-learn, Plotly',
        'is_featured': True,
        'github_url': 'https://github.com/evanditter/ml-dashboard'
    },
    {
        'title': 'Mobile Task Manager',
        'description': 'Cross-platform mobile app for task management and productivity. React Native app with offline capabilities and cloud sync functionality. Features include task creation, categorization, due dates, notifications, and team collaboration features.',
        'short_description': 'Cross-platform mobile app for task management',
        'slug': 'mobile-task-manager',
        'category': 'Mobile App',
        'technologies': 'React Native, Firebase, AsyncStorage, Redux',
        'is_featured': False,
        'github_url': 'https://github.com/evanditter/task-manager'
    },
    {
        'title': 'Nava Workout buddy',
        'description': 'Nava workout capabilities',
        'short_description': 'Cross-platform mobile app for task management',
        'slug': 'Nava-workout-buddy',
        'category': 'Mobile App',
        'technologies': 'React Native, Firebase, AsyncStorage, Redux',
        'is_featured': False,
        'github_url': 'https://github.com/evanditter/nava-workout-buddy'
    }
]

for project_data in projects_data:
    project, created = Project.objects.get_or_create(
        slug=project_data['slug'],
        defaults=project_data
    )
    if created:
        print(f"Created project: {project.title}")
    else:
        print(f"Project already exists: {project.title}")

# Create some sample courses
courses_data = [
    {
        'title': 'Complete Django REST API Development',
        'description': 'Master Django REST Framework from basics to advanced concepts. Learn to build robust, scalable APIs with authentication, permissions, serialization, and testing. This comprehensive course covers everything you need to know to become proficient in Django REST API development.',
        'short_description': 'Master Django REST Framework from basics to advanced concepts',
        'slug': 'complete-django-rest-api',
        'difficulty': 'Intermediate',
        'status': 'Published',
        'duration_hours': 25,
        'price': 99.99,
        'prerequisites': 'Basic Python knowledge, Django fundamentals',
        'what_you_learn': 'Django REST Framework\nAPI Authentication & Permissions\nSerialization\nViewSets and Routers\nAPI Testing\nAdvanced Features',
        'technologies': 'Django, Django REST Framework, Python, PostgreSQL, JWT',
        'is_featured': True,
        'order': 1
    },
    {
        'title': 'React for Beginners: Complete Guide',
        'description': 'Learn React from scratch in this comprehensive beginner-friendly course. Build modern, interactive web applications with React hooks, state management, routing, and API integration. Perfect for developers new to React or frontend development.',
        'short_description': 'Learn React from scratch with hands-on projects',
        'slug': 'react-for-beginners',
        'difficulty': 'Beginner',
        'status': 'Published',
        'duration_hours': 18,
        'price': 0.00,  # Free course
        'prerequisites': 'Basic HTML, CSS, and JavaScript knowledge',
        'what_you_learn': 'React Components & JSX\nHooks (useState, useEffect)\nState Management\nReact Router\nAPI Integration\nProject Building',
        'technologies': 'React, JavaScript, HTML, CSS, Node.js',
        'is_featured': True,
        'order': 2
    },
    {
        'title': 'Machine Learning with Python',
        'description': 'Dive into machine learning using Python and popular libraries like Scikit-learn, Pandas, and NumPy. Learn to build, train, and deploy ML models for real-world applications. Covers supervised learning, unsupervised learning, and model evaluation.',
        'short_description': 'Build and deploy machine learning models with Python',
        'slug': 'machine-learning-python',
        'difficulty': 'Advanced',
        'status': 'Published',
        'duration_hours': 35,
        'price': 149.99,
        'prerequisites': 'Strong Python knowledge, basic statistics',
        'what_you_learn': 'Supervised Learning Algorithms\nUnsupervised Learning\nModel Evaluation & Selection\nFeature Engineering\nModel Deployment\nReal-world Projects',
        'technologies': 'Python, Scikit-learn, Pandas, NumPy, Matplotlib, Jupyter',
        'is_featured': False,
        'order': 3
    },
    {
        'title': 'Full-Stack Web Development Bootcamp',
        'description': 'Complete full-stack development course covering both frontend and backend technologies. Build modern web applications from scratch using React, Node.js, Express, and MongoDB. Includes deployment and best practices.',
        'short_description': 'Complete full-stack development with modern technologies',
        'slug': 'fullstack-bootcamp',
        'difficulty': 'Intermediate',
        'status': 'Published',
        'duration_hours': 50,
        'price': 199.99,
        'prerequisites': 'Basic programming knowledge, HTML/CSS fundamentals',
        'what_you_learn': 'Frontend Development with React\nBackend APIs with Node.js\nDatabase Design with MongoDB\nAuthentication & Security\nDeployment Strategies\nProject Portfolio',
        'technologies': 'React, Node.js, Express, MongoDB, JWT, Heroku',
        'is_featured': True,
        'order': 4
    }
]

for course_data in courses_data:
    course, created = Course.objects.get_or_create(
        slug=course_data['slug'],
        defaults=course_data
    )
    if created:
        print(f"Created course: {course.title}")
    else:
        print(f"Course already exists: {course.title}")

# Create some skills
skills_data = [
    {'name': 'Python', 'proficiency': 'expert', 'category': 'programming'},
    {'name': 'JavaScript', 'proficiency': 'expert', 'category': 'programming'},
    {'name': 'React', 'proficiency': 'advanced', 'category': 'frontend'},
    {'name': 'Django', 'proficiency': 'expert', 'category': 'backend'},
    {'name': 'Machine Learning', 'proficiency': 'advanced', 'category': 'data_science'},
]

for skill_data in skills_data:
    skill, created = Skill.objects.get_or_create(
        name=skill_data['name'],
        defaults=skill_data
    )
    if created:
        print(f"Created skill: {skill.name}")

print("\nSample data creation complete!")
print(f"Total Projects: {Project.objects.count()}")
print(f"Total Courses: {Course.objects.count()}")
print(f"Total Skills: {Skill.objects.count()}")
print(f"PersonalInfo exists: {PersonalInfo.objects.exists()}")
