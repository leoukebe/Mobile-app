import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { 
  GraduationCap, 
  BookOpen, 
  LogOut,
  User,
  LayoutDashboard,
  Users,
  Calendar,
  TrendingUp,
  Inbox,
  History,
  Sparkles,
  UserCircle
} from "lucide-react";
import { availableCourses, enrolledCourses, Course } from "../data/mock-data";
import { toast } from "sonner";
import { DashboardSection } from "../components/sections/dashboard-section";
import { AccountSection } from "../components/sections/account-section";
import { CoursesSection } from "../components/sections/courses-section";
import { GroupsSection } from "../components/sections/groups-section";
import { CalendarSection } from "../components/sections/calendar-section";
import { TrackProgressSection } from "../components/sections/track-progress-section";
import { InboxSection } from "../components/sections/inbox-section";
import { HistorySection } from "../components/sections/history-section";
import { AIHelpSection } from "../components/sections/ai-help-section";

export function DashboardPage() {
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState<Course[]>(enrolledCourses);
  const [available, setAvailable] = useState<Course[]>(availableCourses);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const sidebarItems = [
    { name: "Account", icon: UserCircle },
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Courses", icon: BookOpen },
    { name: "Groups", icon: Users },
    { name: "Calendar", icon: Calendar },
    { name: "Track progress", icon: TrendingUp },
    { name: "Inbox", icon: Inbox },
    { name: "History", icon: History },
    { name: "AI help", icon: Sparkles },
  ];

  const handleEnroll = (course: Course) => {
    setAvailable(available.filter(c => c.id !== course.id));
    setEnrolled([...enrolled, { ...course, enrolled: true }]);
    toast.success(`Successfully enrolled in ${course.code}: ${course.title}`);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">University LMS</h1>
                <p className="text-xs text-gray-500">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">User 1</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)] sticky top-16">
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveSection(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {activeSection === "Dashboard" && (
            <DashboardSection 
              enrolled={enrolled}
              available={available}
              onEnroll={handleEnroll}
            />
          )}
          {activeSection === "Account" && <AccountSection />}
          {activeSection === "Courses" && <CoursesSection />}
          {activeSection === "Groups" && <GroupsSection />}
          {activeSection === "Calendar" && <CalendarSection />}
          {activeSection === "Track progress" && <TrackProgressSection />}
          {activeSection === "Inbox" && <InboxSection />}
          {activeSection === "History" && <HistorySection />}
          {activeSection === "AI help" && <AIHelpSection />}
        </main>
      </div>
    </div>
  );
}