import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Users, MessageSquare, Calendar } from "lucide-react";

export function GroupsSection() {
  const groups = [
    {
      id: 1,
      name: "CS301 Study Group",
      course: "CS301",
      members: 8,
      description: "Weekly study sessions for Data Structures and Algorithms",
      nextMeeting: "Tomorrow, 3:00 PM",
      unreadMessages: 5
    },
    {
      id: 2,
      name: "Database Project Team",
      course: "CS350",
      members: 4,
      description: "Final project team for Database Systems course",
      nextMeeting: "Friday, 2:00 PM",
      unreadMessages: 12
    },
    {
      id: 3,
      name: "Linear Algebra Tutoring",
      course: "MATH201",
      members: 15,
      description: "Peer tutoring and homework help for Linear Algebra",
      nextMeeting: "Monday, 4:00 PM",
      unreadMessages: 2
    },
    {
      id: 4,
      name: "CS Department Social",
      course: "General",
      members: 45,
      description: "Computer Science department social and networking group",
      nextMeeting: "Next Week",
      unreadMessages: 8
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">My Groups</h2>
          <p className="text-gray-600">Collaborate with classmates and study groups</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Users className="w-4 h-4 mr-2" />
          Create Group
        </Button>
      </div>

      {/* Groups Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Groups</p>
                <p className="text-3xl font-semibold text-gray-900">{groups.length}</p>
              </div>
              <Users className="w-10 h-10 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Members</p>
                <p className="text-3xl font-semibold text-gray-900">
                  {groups.reduce((sum, g) => sum + g.members, 0)}
                </p>
              </div>
              <Users className="w-10 h-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Unread Messages</p>
                <p className="text-3xl font-semibold text-gray-900">
                  {groups.reduce((sum, g) => sum + g.unreadMessages, 0)}
                </p>
              </div>
              <MessageSquare className="w-10 h-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Groups List */}
      <div className="grid gap-4">
        {groups.map((group) => (
          <Card key={group.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl">{group.name}</CardTitle>
                    {group.unreadMessages > 0 && (
                      <Badge className="bg-red-100 text-red-700">
                        {group.unreadMessages} new
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{group.description}</CardDescription>
                </div>
                <Badge variant="outline">{group.course}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Next: {group.nextMeeting}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                    View Group
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
