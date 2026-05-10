import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Mail, MailOpen, Paperclip } from "lucide-react";

export function InboxSection() {
  const messages = [
    {
      id: 1,
      from: "Course Instructor",
      course: "CS301",
      subject: "Reminder: Midterm Exam Next Week",
      preview: "This is a reminder that the midterm exam for Data Structures and Algorithms will be held next week on February 15th...",
      time: "2 hours ago",
      read: false,
      hasAttachment: false
    },
    {
      id: 2,
      from: "Course Instructor",
      course: "CS350",
      subject: "Project Presentation Guidelines",
      preview: "Please find attached the guidelines for your final project presentation. Make sure to review all requirements...",
      time: "5 hours ago",
      read: false,
      hasAttachment: true
    },
    {
      id: 3,
      from: "Academic Advisor",
      course: "Advising",
      subject: "Registration for Fall 2026",
      preview: "Registration for Fall 2026 semester will begin on March 1st. Please schedule an appointment to discuss your course selection...",
      time: "1 day ago",
      read: false,
      hasAttachment: false
    },
    {
      id: 4,
      from: "Course Instructor",
      course: "MATH201",
      subject: "Office Hours This Week",
      preview: "My office hours this week will be held on Thursday from 2-4 PM instead of the usual Wednesday schedule...",
      time: "1 day ago",
      read: true,
      hasAttachment: false
    },
    {
      id: 5,
      from: "Study Group",
      course: "CS301",
      subject: "Study Session Tomorrow",
      preview: "Hey everyone! Just a reminder that we're meeting tomorrow at 3 PM in the library. Bring your notes on binary trees...",
      time: "2 days ago",
      read: true,
      hasAttachment: false
    },
    {
      id: 6,
      from: "IT Department",
      course: "System",
      subject: "System Maintenance Notice",
      preview: "The LMS will undergo scheduled maintenance this Saturday from 2-4 AM. Access may be limited during this time...",
      time: "3 days ago",
      read: true,
      hasAttachment: false
    },
    {
      id: 7,
      from: "Course Instructor",
      course: "CS350",
      subject: "Assignment 3 Feedback Available",
      preview: "Feedback for Assignment 3 is now available in the grades section. Overall, the class did well but please review the comments...",
      time: "4 days ago",
      read: true,
      hasAttachment: false
    },
    {
      id: 8,
      from: "Course Instructor",
      course: "CS301",
      subject: "Additional Resources for Algorithm Analysis",
      preview: "I've uploaded some additional resources to help with understanding algorithm complexity analysis...",
      time: "5 days ago",
      read: true,
      hasAttachment: true
    }
  ];

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Inbox</h2>
          <p className="text-gray-600">Messages and notifications from your courses</p>
        </div>
        {unreadCount > 0 && (
          <Badge className="bg-red-100 text-red-700 text-base px-3 py-1">
            {unreadCount} unread
          </Badge>
        )}
      </div>

      {/* Inbox Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Messages</p>
                <p className="text-3xl font-semibold text-gray-900">{messages.length}</p>
              </div>
              <Mail className="w-10 h-10 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Unread</p>
                <p className="text-3xl font-semibold text-gray-900">{unreadCount}</p>
              </div>
              <MailOpen className="w-10 h-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Week</p>
                <p className="text-3xl font-semibold text-gray-900">
                  {messages.filter(m => !m.time.includes("days")).length}
                </p>
              </div>
              <Mail className="w-10 h-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Messages List */}
      <div className="space-y-2">
        {messages.map((message) => (
          <Card 
            key={message.id} 
            className={`cursor-pointer hover:shadow-md transition-shadow ${
              !message.read ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
            }`}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {message.read ? (
                    <MailOpen className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Mail className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`font-medium ${!message.read ? "text-gray-900" : "text-gray-700"}`}>
                          {message.from}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {message.course}
                        </Badge>
                        {message.hasAttachment && (
                          <Paperclip className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <p className={`text-sm mb-1 ${!message.read ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                        {message.subject}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-1">{message.preview}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-gray-500">{message.time}</p>
                      {!message.read && (
                        <Badge className="bg-blue-600 mt-1">New</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
