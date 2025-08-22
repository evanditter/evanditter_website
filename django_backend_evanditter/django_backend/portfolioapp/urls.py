from django.urls import path
from . import views 


urlpatterns = [
    # Course URLs (main backend functionality)
    path("courses/", views.course_list, name="course_list"),
    path("courses/<slug:slug>/", views.get_course, name="get_course"),
    path("featured-courses/", views.featured_courses, name="featured_courses"),
    path("courses/difficulty/<str:difficulty>/", views.courses_by_difficulty, name="courses_by_difficulty"),
    path("free-courses/", views.free_courses, name="free_courses"),
    path("courses/<slug:course_slug>/lessons/<slug:lesson_slug>/", views.get_lesson, name="get_lesson"),
    
    # Contact form URL
    path("contact/", views.contact_form, name="contact_form"),
]