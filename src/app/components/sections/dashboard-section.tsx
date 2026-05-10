import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BookOpen } from "lucide-react";
import { availableCourses, enrolledCourses, Course } from "../../data/mock-data";
import { toast } from "sonner";

interface DashboardSectionProps {
  onEnroll: (course: Course) => void;
  enrolled: Course[];
  available: Course[];
}

export function DashboardSection({ onEnroll, enrolled, available }: DashboardSectionProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Welcome back, User 1!</h2>
        <p className="text-gray-600">Manage your courses and track your academic progress</p>
      </div>

      {/* Enrolled Courses Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">My Enrolled Courses</h3>
            <p className="text-gray-600 mt-1">Courses you are currently taking</p>
          </div>
          <Badge variant="secondary" className="text-base px-3 py-1">
            {enrolled.length} Courses
          </Badge>
        </div>
        
        {enrolled.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">You haven't enrolled in any courses yet.</p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enrolled.map((course) => (
              <Card 
                key={course.id} 
                className="hover:shadow-lg transition-shadow border-l-4 border-l-indigo-600"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                      {course.code}
                    </Badge>
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.instructor}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                  <Button
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => navigate(`/course/${course.id}?tab=materials`)}
                  >
                    Open Course Materials
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <Separator className="my-12" />

      {/* Available Courses Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Available Courses</h3>
            <p className="text-gray-600 mt-1">Browse and enroll in new courses</p>
          </div>
          <Badge variant="outline" className="text-base px-3 py-1">
            {available.length} Available
          </Badge>
        </div>
        
        {available.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">No courses available for enrollment at this time.</p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {available.map((course) => (
              <Card 
                key={course.id} 
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-gray-700">
                      {course.code}
                    </Badge>
                    <BookOpen className="w-5 h-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.instructor}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="font-medium">Schedule:</span>
                      <span>{course.schedule}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => onEnroll(course)}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
