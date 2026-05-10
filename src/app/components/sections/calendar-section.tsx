import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin, BookOpen } from "lucide-react";

export function CalendarSection() {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });

  const upcomingEvents = [
    {
      id: 1,
      title: "CS301 Midterm Exam",
      course: "CS301",
      date: "Feb 15, 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Room 204",
      type: "exam",
      color: "red"
    },
    {
      id: 2,
      title: "Database Project Presentation",
      course: "CS350",
      date: "Feb 18, 2026",
      time: "2:00 PM - 3:30 PM",
      location: "Room 301",
      type: "presentation",
      color: "blue"
    },
    {
      id: 3,
      title: "Linear Algebra Quiz 3",
      course: "MATH201",
      date: "Feb 12, 2026",
      time: "1:00 PM - 2:00 PM",
      location: "Room 105",
      type: "quiz",
      color: "yellow"
    },
    {
      id: 4,
      title: "Study Group Meeting",
      course: "CS301",
      date: "Feb 12, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Library Room 3B",
      type: "meeting",
      color: "green"
    },
    {
      id: 5,
      title: "CS350 Assignment Due",
      course: "CS350",
      date: "Feb 14, 2026",
      time: "11:59 PM",
      location: "Online Submission",
      type: "assignment",
      color: "purple"
    },
    {
      id: 6,
      title: "Office Hours - Course Instructor",
      course: "MATH201",
      date: "Feb 13, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Office 412",
      type: "office-hours",
      color: "indigo"
    }
  ];

  const getEventBadgeColor = (type: string) => {
    const colors: Record<string, string> = {
      exam: "bg-red-100 text-red-700",
      quiz: "bg-yellow-100 text-yellow-700",
      assignment: "bg-purple-100 text-purple-700",
      presentation: "bg-blue-100 text-blue-700",
      meeting: "bg-green-100 text-green-700",
      "office-hours": "bg-indigo-100 text-indigo-700"
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  const getEventIcon = (type: string) => {
    if (type === "exam" || type === "quiz") return "📝";
    if (type === "assignment") return "📋";
    if (type === "presentation") return "🎤";
    if (type === "meeting") return "👥";
    if (type === "office-hours") return "🏫";
    return "📅";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Academic Calendar</h2>
        <p className="text-gray-600">View your schedule and upcoming events</p>
      </div>

      {/* Calendar Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Week</p>
                <p className="text-3xl font-semibold text-gray-900">4</p>
                <p className="text-xs text-gray-500 mt-1">Events</p>
              </div>
              <Calendar className="w-10 h-10 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-3xl font-semibold text-gray-900">12</p>
                <p className="text-xs text-gray-500 mt-1">Events</p>
              </div>
              <Calendar className="w-10 h-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Next Exam</p>
                <p className="text-xl font-semibold text-gray-900">Feb 12</p>
                <p className="text-xs text-gray-500 mt-1">In 1 day</p>
              </div>
              <Clock className="w-10 h-10 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Month Display */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {currentMonth}
          </CardTitle>
          <CardDescription>Upcoming events and deadlines</CardDescription>
        </CardHeader>
      </Card>

      {/* Upcoming Events */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{getEventIcon(event.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{event.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{event.course}</Badge>
                          <Badge className={getEventBadgeColor(event.type)}>
                            {event.type.replace("-", " ")}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
