import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "@/services/apiPortfolio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Clock, Users, Star, DollarSign, Play, FileText, CheckCircle, ArrowLeft } from "lucide-react";

function CourseDetailPage() {
  const { slug } = useParams();

  const { data: course, isLoading, error } = useQuery({
    queryKey: ['course', slug],
    queryFn: () => getCourse(slug),
    enabled: !!slug,
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="text-gray-600 dark:text-gray-300">Loading course...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Course Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/courses">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/courses">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <Card>
              <CardHeader>
                {course.image && (
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty?.charAt(0).toUpperCase() + course.difficulty?.slice(1)}
                    </Badge>
                    {course.is_free && (
                      <Badge className="bg-green-600 text-white">Free</Badge>
                    )}
                  </div>
                  
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h1>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Play className="w-4 h-4" />
                      <span>{course.lesson_count} lessons</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span>{formatDuration(course.total_duration)}</span>
                    </div>
                    
                    {course.rating && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}/5</span>
                      </div>
                    )}
                    
                    {course.enrolled_count && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Users className="w-4 h-4" />
                        <span>{course.enrolled_count} students</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Course Content */}
            {course.content && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About This Course
                  </h2>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: course.content }}
                  />
                </CardContent>
              </Card>
            )}

            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Prerequisites
                  </h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Learning Outcomes */}
            {course.learning_outcomes && course.learning_outcomes.length > 0 && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    What You'll Learn
                  </h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.learning_outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Course Curriculum */}
            {course.lessons && course.lessons.length > 0 && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Course Curriculum
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.lessons.map((lesson, index) => (
                      <div 
                        key={lesson.id} 
                        className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-8">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          
                          <div className="flex items-center gap-3">
                            {lesson.video_url ? (
                              <Play className="w-5 h-5 text-blue-600" />
                            ) : (
                              <FileText className="w-5 h-5 text-gray-600" />
                            )}
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white">
                                {lesson.title}
                              </h3>
                              {lesson.description && (
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                                  {lesson.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                          {lesson.duration && (
                            <span>{formatDuration(lesson.duration)}</span>
                          )}
                          
                          {lesson.is_free && (
                            <Badge variant="outline" className="text-xs">
                              Free Preview
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  {course.is_free ? (
                    <div className="text-3xl font-bold text-green-600">
                      Free
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1">
                      <DollarSign className="w-6 h-6" />
                      <span className="text-3xl font-bold">{course.price}</span>
                    </div>
                  )}
                  
                  <Button size="lg" className="w-full">
                    {course.is_free ? 'Start Learning' : 'Enroll Now'}
                  </Button>
                  
                  {!course.is_free && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      30-day money-back guarantee
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Course Information
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Difficulty:</span>
                    <Badge className={getDifficultyColor(course.difficulty)} variant="outline">
                      {course.difficulty?.charAt(0).toUpperCase() + course.difficulty?.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Last Updated:</span>
                    <span className="text-gray-900 dark:text-white">
                      {formatDate(course.updated_at)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Created:</span>
                    <span className="text-gray-900 dark:text-white">
                      {formatDate(course.created_at)}
                    </span>
                  </div>
                  
                  {course.certificate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Certificate:</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            {course.tags && course.tags.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Tags
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
