import { useParams, useNavigate, useSearchParams } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { 
  ArrowLeft, 
  FileText, 
  ClipboardList, 
  BarChart3, 
  Bell, 
  BookOpen,
  Calendar,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileVideo,
  Link as LinkIcon,
  FileType
} from "lucide-react";
import { 
  enrolledCourses, 
  courseAssignments, 
  courseAnnouncements, 
  courseMaterials,
  syllabusData
} from "../data/mock-data";

export function CourseDetailsPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "syllabus";

  const course = enrolledCourses.find(c => c.id === courseId);
  const assignments = courseAssignments[courseId || ""] || [];
  const announcements = courseAnnouncements[courseId || ""] || [];
  const materials = courseMaterials[courseId || ""] || [];
  const syllabus = syllabusData[courseId || ""];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600 mb-4">Course not found</p>
            <Button onClick={() => navigate("/dashboard")}>
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "graded":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "submitted":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 text-orange-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "graded":
        return <Badge className="bg-green-100 text-green-700">Graded</Badge>;
      case "submitted":
        return <Badge className="bg-blue-100 text-blue-700">Submitted</Badge>;
      case "pending":
        return <Badge className="bg-orange-100 text-orange-700">Pending</Badge>;
      default:
        return null;
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-5 h-5 text-red-600" />;
      case "video":
        return <FileVideo className="w-5 h-5 text-purple-600" />;
      case "link":
        return <LinkIcon className="w-5 h-5 text-blue-600" />;
      case "document":
        return <FileType className="w-5 h-5 text-gray-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="mb-4 -ml-2 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                {course.code}
              </Badge>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h1>
              <p className="text-gray-600">{course.instructor}</p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {course.schedule}
              </p>
            </div>
            <BookOpen className="w-12 h-12 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue={defaultTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="syllabus" className="gap-2 py-3">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Syllabus</span>
            </TabsTrigger>
            <TabsTrigger value="assignments" className="gap-2 py-3">
              <ClipboardList className="w-4 h-4" />
              <span className="hidden sm:inline">Assignments</span>
            </TabsTrigger>
            <TabsTrigger value="grades" className="gap-2 py-3">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Grades</span>
            </TabsTrigger>
            <TabsTrigger value="announcements" className="gap-2 py-3">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Announcements</span>
            </TabsTrigger>
            <TabsTrigger value="materials" className="gap-2 py-3">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Materials</span>
            </TabsTrigger>
          </TabsList>

          {/* Syllabus Tab */}
          <TabsContent value="syllabus" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{course.description}</p>
              </CardContent>
            </Card>

            {syllabus && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Objectives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {syllabus.objectives.map((objective, idx) => (
                        <li key={idx} className="flex gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Grading Policy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {syllabus.grading.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-700">{item.component}</span>
                          <Badge variant="outline">{item.weight}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {syllabus.schedule.map((item, idx) => (
                        <div key={idx} className="border-l-2 border-indigo-600 pl-4 py-2">
                          <p className="font-medium text-gray-900">{item.week}</p>
                          <p className="text-sm text-gray-600">{item.topic}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-4">
            {assignments.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-gray-500">No assignments available</p>
                </CardContent>
              </Card>
            ) : (
              assignments.map((assignment) => (
                <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getStatusIcon(assignment.status)}
                          <CardTitle className="text-lg">{assignment.title}</CardTitle>
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </CardDescription>
                      </div>
                      {getStatusBadge(assignment.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      {assignment.grade !== undefined && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Grade:</span>
                          <Badge className="bg-green-100 text-green-700 text-base">
                            {assignment.grade}%
                          </Badge>
                        </div>
                      )}
                      <div className="ml-auto flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {assignment.status === "pending" && (
                          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                            Submit Assignment
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Grades Tab */}
          <TabsContent value="grades" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overall Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-5xl font-bold text-indigo-600 mb-2">91.7%</div>
                  <Badge className="bg-green-100 text-green-700 text-base">A-</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.filter(a => a.grade !== undefined).map((assignment) => (
                    <div key={assignment.id} className="flex justify-between items-center border-b pb-3 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-900">{assignment.title}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(assignment.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 text-lg px-3 py-1">
                        {assignment.grade}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements" className="space-y-4">
            {announcements.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-gray-500">No announcements available</p>
                </CardContent>
              </Card>
            ) : (
              announcements.map((announcement) => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Bell className="w-5 h-5 text-indigo-600" />
                          {announcement.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Posted by {announcement.author} • {new Date(announcement.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials" className="space-y-4">
            {materials.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-gray-500">No course materials available</p>
                </CardContent>
              </Card>
            ) : (
              materials.map((material) => (
                <Card key={material.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {getFileIcon(material.type)}
                        <div>
                          <p className="font-medium text-gray-900">{material.title}</p>
                          <p className="text-sm text-gray-500">
                            Uploaded: {new Date(material.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
