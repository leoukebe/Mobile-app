import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Mail, Phone, MapPin, Calendar as CalendarIcon, Edit } from "lucide-react";

export function AccountSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Account Settings</h2>
        <p className="text-gray-600">Manage your profile and account preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-3xl font-semibold text-indigo-700">
                U1
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Full Name</label>
                <p className="text-gray-900">User 1</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Student ID</label>
                <p className="text-gray-900">ST20240001</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Major</label>
                <p className="text-gray-900">Computer Science</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Year</label>
                <p className="text-gray-900">Junior (3rd Year)</p>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How we can reach you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">user1@university.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Address</label>
                  <p className="text-gray-900">123 Campus Drive<br />University City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Enrollment Date</label>
                  <p className="text-gray-900">September 2022</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Update Contact
            </Button>
          </CardContent>
        </Card>

        {/* Account Security */}
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Password and account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500">Password</label>
              <p className="text-gray-900">••••••••</p>
            </div>
            <Button className="w-full" variant="outline">
              Change Password
            </Button>
            <Button className="w-full" variant="outline">
              Enable Two-Factor Authentication
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Customize your experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500">Email Notifications</label>
              <p className="text-gray-900">Enabled</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Language</label>
              <p className="text-gray-900">English (US)</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Time Zone</label>
              <p className="text-gray-900">Eastern Time (ET)</p>
            </div>
            <Button className="w-full" variant="outline">
              Manage Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
