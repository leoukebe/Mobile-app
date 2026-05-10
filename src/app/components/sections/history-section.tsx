import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { BookOpen, Award } from "lucide-react";

export function HistorySection() {
  const semesters = [
    {
      term: "Spring 2024",
      gpa: 3.75,
      credits: 15,
      courses: [
        { code: "CS200", title: "Computer Organization", grade: "A", credits: 3 },
        { code: "MATH102", title: "Calculus II", grade: "A-", credits: 4 },
        { code: "PHYS102", title: "Physics II", grade: "B+", credits: 4 },
        { code: "ENG201", title: "Technical Writing", grade: "A", credits: 3 },
        { code: "HIST201", title: "World History", grade: "B", credits: 3 }
      ]
    },
    {
      term: "Fall 2023",
      gpa: 3.65,
      credits: 16,
      courses: [
        { code: "CS101", title: "Introduction to Programming", grade: "A", credits: 4 },
        { code: "MATH101", title: "Calculus I", grade: "B+", credits: 4 },
        { code: "PHYS101", title: "Physics I", grade: "B+", credits: 4 },
        { code: "ENG101", title: "English Composition", grade: "A-", credits: 3 },
        { code: "CHEM101", title: "General Chemistry", grade: "B", credits: 4 }
      ]
    },
    {
      term: "Spring 2023",
      gpa: 3.50,
      credits: 14,
      courses: [
        { code: "CS100", title: "Introduction to Computer Science", grade: "A", credits: 3 },
        { code: "MATH100", title: "Pre-Calculus", grade: "B+", credits: 4 },
        { code: "BUS201", title: "Business Fundamentals", grade: "A-", credits: 3 },
        { code: "ART101", title: "Digital Arts", grade: "A", credits: 3 },
        { code: "PSY101", title: "Introduction to Psychology", grade: "B", credits: 3 }
      ]
    }
  ];

  const cumulativeGPA = 3.63;
  const totalCredits = semesters.reduce((sum, sem) => sum + sem.credits, 0);

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-700";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-700";
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Academic History</h2>
        <p className="text-gray-600">View your past courses and grades</p>
      </div>

      {/* Academic Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-indigo-600">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Cumulative GPA</p>
                <p className="text-3xl font-semibold text-gray-900">{cumulativeGPA}</p>
              </div>
              <Award className="w-10 h-10 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-gray-500">Total Credits</p>
              <p className="text-3xl font-semibold text-gray-900">{totalCredits}</p>
              <p className="text-xs text-gray-500 mt-1">Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-gray-500">Semesters</p>
              <p className="text-3xl font-semibold text-gray-900">{semesters.length}</p>
              <p className="text-xs text-gray-500 mt-1">Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-gray-500">Courses</p>
              <p className="text-3xl font-semibold text-gray-900">
                {semesters.reduce((sum, sem) => sum + sem.courses.length, 0)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Completed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Semester History */}
      <div className="space-y-6">
        {semesters.map((semester) => (
          <Card key={semester.term}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {semester.term}
                  </CardTitle>
                  <CardDescription>{semester.credits} credits earned</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Semester GPA</p>
                  <p className="text-2xl font-semibold text-gray-900">{semester.gpa}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {semester.courses.map((course) => (
                  <div
                    key={course.code}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{course.code}</Badge>
                        <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
                      </div>
                      <p className="font-medium text-gray-900">{course.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Credits</p>
                      <p className="text-lg font-semibold text-gray-900">{course.credits}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* GPA Trend Card */}
      <Card>
        <CardHeader>
          <CardTitle>GPA Trend</CardTitle>
          <CardDescription>Your academic performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {semesters.map((semester, index) => (
              <div key={semester.term} className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-600">{semester.term}</div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-8 relative">
                    <div
                      className="bg-indigo-600 h-8 rounded-full flex items-center justify-end pr-3 text-white text-sm font-medium transition-all"
                      style={{ width: `${(semester.gpa / 4.0) * 100}%` }}
                    >
                      {semester.gpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
