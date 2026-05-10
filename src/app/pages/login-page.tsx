import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { GraduationCap } from "lucide-react";

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, this would validate credentials
    if (username && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl">University LMS</CardTitle>
            <CardDescription className="text-base mt-2">
              Sign in to access your courses
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-indigo-600 hover:bg-indigo-700"
            >
              Log In
            </Button>
            <div className="text-center">
              <Button
                type="button"
                variant="link"
                className="text-indigo-600 hover:text-indigo-700"
                onClick={() => alert("Password reset functionality would be implemented here")}
              >
                Forgot Password?
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
