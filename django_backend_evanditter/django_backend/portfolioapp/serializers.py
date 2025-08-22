from rest_framework import serializers
from .models import Course, Lesson, Contact


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = [
            'id', 'title', 'slug', 'description', 'content', 'video_url',
            'duration_minutes', 'order', 'is_free_preview', 'created_at', 'updated_at'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at']


class CourseSerializer(serializers.ModelSerializer):
    technologies_list = serializers.ReadOnlyField(source='get_technologies_list')
    what_you_learn_list = serializers.ReadOnlyField(source='get_what_you_learn_list')
    is_free = serializers.ReadOnlyField()
    lessons = LessonSerializer(many=True, read_only=True)
    lesson_count = serializers.SerializerMethodField()
    total_duration = serializers.SerializerMethodField()
    
    class Meta:
        model = Course
        fields = [
            'id', 'title', 'slug', 'description', 'short_description',
            'difficulty', 'status', 'duration_hours', 'price', 'is_free',
            'featured_image', 'prerequisites', 'what_you_learn', 'what_you_learn_list',
            'technologies', 'technologies_list', 'order', 'is_featured',
            'lessons', 'lesson_count', 'total_duration',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at']

    def get_lesson_count(self, obj):
        return obj.lessons.count()

    def get_total_duration(self, obj):
        total_minutes = sum(lesson.duration_minutes for lesson in obj.lessons.all())
        hours = total_minutes // 60
        minutes = total_minutes % 60
        return f"{hours}h {minutes}m" if hours > 0 else f"{minutes}m"


class CourseListSerializer(serializers.ModelSerializer):
    """Simplified serializer for course lists"""
    technologies_list = serializers.ReadOnlyField(source='get_technologies_list')
    is_free = serializers.ReadOnlyField()
    lesson_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Course
        fields = [
            'id', 'title', 'slug', 'short_description', 'difficulty',
            'status', 'duration_hours', 'price', 'is_free', 'featured_image',
            'technologies_list', 'is_featured', 'lesson_count', 'created_at'
        ]

    def get_lesson_count(self, obj):
        return obj.lessons.count()


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']