from django.contrib import admin
from .models import Course, Lesson, Contact


class LessonInline(admin.StackedInline):
    model = Lesson
    extra = 0
    prepopulated_fields = {'slug': ('title',)}
    fields = ('title', 'slug', 'description', 'content', 'video_url', 'duration_minutes', 'order', 'is_free_preview')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'difficulty', 'status', 'price', 'is_featured', 'order', 'created_at')
    list_filter = ('difficulty', 'status', 'is_featured', 'price')
    search_fields = ('title', 'description', 'technologies')
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ('order', 'is_featured', 'status', 'price')
    ordering = ('order', '-created_at')
    inlines = [LessonInline]
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'short_description', 'description')
        }),
        ('Course Details', {
            'fields': ('difficulty', 'status', 'duration_hours', 'price', 'technologies')
        }),
        ('Learning Outcomes', {
            'fields': ('prerequisites', 'what_you_learn')
        }),
        ('Display Options', {
            'fields': ('featured_image', 'order', 'is_featured')
        }),
    )


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'duration_minutes', 'order', 'is_free_preview')
    list_filter = ('course', 'is_free_preview')
    search_fields = ('title', 'description', 'course__title')
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ('order', 'is_free_preview')
    ordering = ('course', 'order')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'subject')
    readonly_fields = ('name', 'email', 'subject', 'message', 'created_at')
    list_editable = ('is_read',)
    ordering = ('-created_at',)
    
    def has_add_permission(self, request):
        # Contact forms are submitted through the website, not admin
        return False