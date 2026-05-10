import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle, Circle, TrendingUp, Award } from "lucide-react";

export function TrackProgressSection() {
  const degreeRequirements = [
    {
      category: "Core Computer Science",
      required: 36,
      completed: 24,
      inProgress: 8,
      courses: [
        { code: "CS101", title: "Introduction to Programming", status: "completed" },
        { code: "CS200", title: "Computer Organization", status: "completed" },
        { code: "CS301", title: "Data Structures and Algorithms", status: "in-progress" },
        { code: "CS350", title: "Database Systems", status: "in-progress" },
        { code: "CS400", title: "Software Engineering", status: "not-started" },
        { code: "CS450", title: "Operating Systems", status: "not-started" }
      ]
    },
    {
      category: "Mathematics",
      required: 12,
      completed: 6,
      inProgress: 3,
      courses: [
        { code: "MATH101", title: "Calculus I", status: "completed" },
        { code: "MATH102", title: "Calculus II", status: "completed" },
        { code: "MATH201", title: "Linear Algebra", status: "in-progress" },
        { code: "MATH301", title: "Discrete Mathematics", status: "not-started" }
      ]
    },
    {
      category: "General Education",
      required: 30,
      completed: 24,
      inProgress: 0,
      courses: [
        { code: "ENG101", title: "English Composition", status: "completed" },
        { code: "HIST201", title: "World History", status: "completed" },
        { code: "PHYS101", title: "Physics I", status: "completed" },
        { code: "PHYS102", title: "Physics II", status: "completed" }
      ]
    },
    {
      category: "Electives",
      required: 15,
      completed: 6,
      inProgress: 0,
      courses: [
        { code: "ART101", title: "Digital Arts", status: "completed" },
        { code: "BUS201", title: "Business Fundamentals", status: "completed" }
      ]
    }
  ];

  const totalRequired = degreeRequirements.reduce((sum, cat) => sum + cat.required, 0);
  const totalCompleted = degreeRequirements.reduce((sum, cat) => sum + cat.completed, 0);
  const totalInProgress = degreeRequirements.reduce((sum, cat) => sum + cat.inProgress, 0);
  const overallProgress = Math.round((totalCompleted / totalRequired) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Degree Progress</h2>
        <p className="text-gray-600">Track your progress towards your Computer Science degree</p>
      </div>

      {/* Overall Progress */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-indigo-600">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Overall Progress</p>
                <p className="text-3xl font-semibold text-gray-900">{overallProgress}%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-gray-500">Total Credits</p>
              <p className="text-3xl font-semibold text-gray-900">{totalRequired}</p>
              <p className="text-xs text-gray-500 mt-1">Required</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-3xl font-semibold text-green-600">{totalCompleted}</p>
              <p className="text-xs text-gray-500 mt-1">Credits</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <p className="text-3xl font-semibold text-blue-600">{totalInProgress}</p>
              <p className="text-xs text-gray-500 mt-1">Credits</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress Bar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Bachelor of Science in Computer Science
          </CardTitle>
          <CardDescription>Expected Graduation: May 2026</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Degree Completion</span>
              <span className="text-sm font-medium text-gray-900">
                {totalCompleted + totalInProgress} / {totalRequired} credits
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="flex h-4 rounded-full overflow-hidden">
                <div
                  className="bg-green-600 transition-all"
                  style={{ width: `${(totalCompleted / totalRequired) * 100}%` }}
                />
                <div
                  className="bg-blue-400 transition-all"
                  style={{ width: `${(totalInProgress / totalRequired) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
                <span className="text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-400 rounded"></div>
                <span className="text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-200 rounded"></div>
                <span className="text-gray-600">Not Started</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Requirement Categories */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Requirement Categories</h3>
        {degreeRequirements.map((category) => {
          const categoryProgress = Math.round((category.completed / category.required) * 100);
          return (
            <Card key={category.category}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>
                      {category.completed + category.inProgress} / {category.required} credits
                    </CardDescription>
                  </div>
                  <Badge variant={categoryProgress === 100 ? "default" : "secondary"}>
                    {categoryProgress}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="flex h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-green-600 transition-all"
                        style={{ width: `${(category.completed / category.required) * 100}%` }}
                      />
                      <div
                        className="bg-blue-400 transition-all"
                        style={{ width: `${(category.inProgress / category.required) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.courses.map((course) => (
                    <div key={course.code} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        {course.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : course.status === "in-progress" ? (
                          <Circle className="w-5 h-5 text-blue-600 fill-blue-100" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{course.code}</p>
                          <p className="text-sm text-gray-600">{course.title}</p>
                        </div>
                      </div>
                      <Badge
                        variant={course.status === "completed" ? "default" : "outline"}
                        className={
                          course.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : course.status === "in-progress"
                            ? "bg-blue-100 text-blue-700"
                            : ""
                        }
                      >
                        {course.status === "completed"
                          ? "Completed"
                          : course.status === "in-progress"
                          ? "In Progress"
                          : "Not Started"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
