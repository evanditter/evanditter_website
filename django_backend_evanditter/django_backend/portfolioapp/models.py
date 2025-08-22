from django.db import models
from django.utils.text import slugify
from django.utils import timezone

# Create your models here.

class Course(models.Model):
    DIFFICULTY_CHOICES = (
        ("Beginner", "Beginner"),
        ("Intermediate", "Intermediate"),
        ("Advanced", "Advanced"),
    )

    STATUS_CHOICES = (
        ("Draft", "Draft"),
        ("Published", "Published"),
        ("Archived", "Archived"),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    description = models.TextField()
    short_description = models.CharField(max_length=200, help_text="Brief description for course cards")
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_CHOICES)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default="Draft")
    duration_hours = models.IntegerField(help_text="Estimated course duration in hours")
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Course price (0 for free)")
    featured_image = models.ImageField(upload_to="course_images", blank=True, null=True)
    prerequisites = models.TextField(blank=True, help_text="What students should know before taking this course")
    what_you_learn = models.TextField(help_text="What students will learn from this course")
    technologies = models.CharField(max_length=500, help_text="Comma-separated list of technologies covered")
    order = models.IntegerField(default=0, help_text="Order of display (lower numbers first)")
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def get_technologies_list(self):
        return [tech.strip() for tech in self.technologies.split(',') if tech.strip()]

    def get_what_you_learn_list(self):
        return [item.strip() for item in self.what_you_learn.split('\n') if item.strip()]

    @property
    def is_free(self):
        return self.price == 0


class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    content = models.TextField()
    video_url = models.URLField(blank=True, null=True, help_text="YouTube, Vimeo, or other video URL")
    duration_minutes = models.IntegerField(help_text="Lesson duration in minutes")
    order = models.IntegerField(default=0)
    is_free_preview = models.BooleanField(default=False, help_text="Allow free preview of this lesson")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']
        unique_together = ('course', 'slug')

    def __str__(self):
        return f"{self.course.title} - {self.title}"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=300)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Contact from {self.name} - {self.subject}"