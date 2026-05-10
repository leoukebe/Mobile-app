import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BookOpen, Clock, Users } from "lucide-react";

export function CoursesSection() {
  const allCourses = [
    {
      id: 1,
      code: "CS301",
      title: "Data Structures and Algorithms",
      status: "In Progress",
      progress: 65,
      credits: 4,
      schedule: "MWF 10:00-11:00 AM"
    },
    {
      id: 2,
      code: "CS350",
      title: "Database Systems",
      status: "In Progress",
      progress: 72,
      credits: 3,
      schedule: "TTh 2:00-3:30 PM"
    },
    {
      id: 3,
      code: "MATH201",
      title: "Linear Algebra",
      status: "In Progress",
      progress: 58,
      credits: 3,
      schedule: "MWF 1:00-2:00 PM"
    },
    {
      id: 4,
      code: "CS101",
      title: "Introduction to Programming",
      status: "Completed",
      progress: 100,
      credits: 4,
      schedule: "Completed Fall 2023"
    },
    {
      id: 5,
      code: "CS200",
      title: "Computer Organization",
      status: "Completed",
      progress: 100,
      credits: 3,
      schedule: "Completed Spring 2024"
    }
  ];

  const inProgressCourses = allCourses.filter(c => c.status === "In Progress");
  const completedCourses = allCourses.filter(c => c.status === "Completed");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">My Courses</h2>
        <p className="text-gray-600">View and manage all your courses</p>
      </div>

      {/* Course Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Courses</p>
                <p className="text-3xl font-semibold text-gray-900">{allCourses.length}</p>
              </div>
              <BookOpen className="w-10 h-10 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Progress</p>
                <p className="text-3xl font-semibold text-gray-900">{inProgressCourses.length}</p>
              </div>
              <Clock className="w-10 h-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-3xl font-semibold text-gray-900">{completedCourses.length}</p>
              </div>
              <Users className="w-10 h-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-4">
            {allCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{course.code}</Badge>
                        <Badge className={course.status === "Completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                          {course.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="mt-1">{course.schedule}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Credits</p>
                      <p className="text-2xl font-semibold text-gray-900">{course.credits}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-4">
            {inProgressCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{course.code}</Badge>
                        <Badge className="bg-blue-100 text-blue-700">{course.status}</Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="mt-1">{course.schedule}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Credits</p>
                      <p className="text-2xl font-semibold text-gray-900">{course.credits}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-4">
            {completedCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{course.code}</Badge>
                        <Badge className="bg-green-100 text-green-700">{course.status}</Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="mt-1">{course.schedule}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Credits</p>
                      <p className="text-2xl font-semibold text-gray-900">{course.credits}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
