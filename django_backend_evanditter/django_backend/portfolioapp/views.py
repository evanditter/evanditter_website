from django.shortcuts import render, get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Course, Lesson, Contact
from .serializers import (
    CourseSerializer, CourseListSerializer,
    LessonSerializer, ContactSerializer
)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination


class CourseListPagination(PageNumberPagination):
    page_size = 9


 # Course Views
@api_view(["GET"])
@permission_classes([AllowAny])
def course_list(request):
    """Get all published courses with pagination"""
    courses = Course.objects.filter(status="Published")
    paginator = CourseListPagination()
    paginated_courses = paginator.paginate_queryset(courses, request)
    serializer = CourseListSerializer(paginated_courses, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_course(request, slug):
    """Get a specific course by slug with all lessons"""
    course = get_object_or_404(Course, slug=slug, status="Published")
    serializer = CourseSerializer(course)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def featured_courses(request):
    """Get featured courses only"""
    courses = Course.objects.filter(is_featured=True, status="Published")
    serializer = CourseListSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def courses_by_difficulty(request, difficulty):
    """Get courses filtered by difficulty"""
    courses = Course.objects.filter(difficulty=difficulty, status="Published")
    serializer = CourseListSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def free_courses(request):
    """Get all free courses"""
    courses = Course.objects.filter(price=0, status="Published")
    serializer = CourseListSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_lesson(request, course_slug, lesson_slug):
    """Get a specific lesson from a course"""
    course = get_object_or_404(Course, slug=course_slug, status="Published")
    lesson = get_object_or_404(Lesson, course=course, slug=lesson_slug)
    
    # For now, all lessons are accessible since we don't have user authentication
    # In the future, you might want to restrict access based on enrollment
    serializer = LessonSerializer(lesson)
    return Response(serializer.data)


@require_http_methods(["POST"])
@permission_classes([AllowAny])
def contact_form(request):
    """Handle contact form submissions"""
    try:
        # Parse JSON data
        data = json.loads(request.body)
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({
                    'success': False,
                    'error': f'{field} is required'
                }, status=400)
        
        # Create contact record
        contact = Contact.objects.create(
            name=data['name'],
            email=data['email'],
            subject=data['subject'],
            message=data['message']
        )
        
        # Send email notification
        try:
            subject = f"New Contact Form Submission: {contact.subject}"
            message = f"""
            New contact form submission received:
            
            Name: {contact.name}
            Email: {contact.email}
            Subject: {contact.subject}
            
            Message:
            {contact.message}
            
            Submitted at: {contact.created_at}
            """
            
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['evan@evanditter.com'],
                fail_silently=False,
            )
            
        except Exception as e:
            # Even if email fails, we saved the contact, so return success
            print(f"Email sending failed: {e}")
        
        return JsonResponse({
            'success': True,
            'message': 'Your message has been sent successfully!'
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'error': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': 'An error occurred while processing your request'
        }, status=500)