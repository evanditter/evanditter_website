import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, DollarSign, Play } from "lucide-react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'draft':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'archived':
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

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
      <CardHeader className="pb-4">
        {course.image && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            {course.is_free && (
              <Badge className="absolute top-2 right-2 bg-green-600 text-white">
                Free
              </Badge>
            )}
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge className={getDifficultyColor(course.difficulty)}>
              {course.difficulty?.charAt(0).toUpperCase() + course.difficulty?.slice(1)}
            </Badge>
            <Badge className={getStatusColor(course.status)}>
              {course.status?.charAt(0).toUpperCase() + course.status?.slice(1)}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {course.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex-grow pb-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            <span>{course.lesson_count} lessons</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{formatDuration(course.total_duration)}</span>
          </div>
          
          {course.rating && (
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}/5</span>
            </div>
          )}
          
          {course.enrolled_count && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{course.enrolled_count} students</span>
            </div>
          )}
        </div>

        {course.tags && course.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {course.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {course.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{course.tags.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            {course.is_free ? (
              <span className="text-lg font-bold text-green-600">Free</span>
            ) : (
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span className="text-lg font-bold">{course.price}</span>
              </div>
            )}
          </div>
          
          <Button asChild size="sm">
            <Link to={`/courses/${course.slug}`}>
              {course.is_free ? 'Start Course' : 'Learn More'}
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
