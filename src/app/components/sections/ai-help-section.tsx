import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Sparkles, Send, BookOpen, Calendar, HelpCircle, TrendingUp } from "lucide-react";

export function AIHelpSection() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI Learning Assistant. How can I help you today? I can assist with course information, study tips, schedule planning, and answer questions about your academic progress."
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickActions = [
    {
      icon: BookOpen,
      title: "Study Tips",
      description: "Get personalized study recommendations",
      prompt: "Can you give me study tips for my Data Structures course?"
    },
    {
      icon: Calendar,
      title: "Schedule Help",
      description: "Optimize your study schedule",
      prompt: "Help me create a study schedule for my upcoming exams"
    },
    {
      icon: TrendingUp,
      title: "Progress Analysis",
      description: "Review your academic progress",
      prompt: "Analyze my academic progress and suggest areas for improvement"
    },
    {
      icon: HelpCircle,
      title: "Course Advice",
      description: "Get course recommendations",
      prompt: "What courses should I take next semester?"
    }
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputValue
    };

    // Simulate AI response
    const aiResponse = {
      id: messages.length + 2,
      type: "ai",
      content: getAIResponse(inputValue)
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInputValue("");
  };

  const handleQuickAction = (prompt: string) => {
    setInputValue(prompt);
  };

  const getAIResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("study") || lowerInput.includes("tips")) {
      return "Here are some effective study strategies:\n\n1. **Active Recall**: Test yourself regularly instead of just reading\n2. **Spaced Repetition**: Review material at increasing intervals\n3. **Pomodoro Technique**: Study in 25-minute focused sessions\n4. **Practice Problems**: For CS courses, solve coding problems daily\n5. **Study Groups**: Collaborate with classmates to share knowledge\n\nWould you like specific tips for any particular course?";
    }
    
    if (lowerInput.includes("schedule") || lowerInput.includes("time")) {
      return "I can help you create an effective study schedule! Based on your current courses (CS301, CS350, MATH201), here's a suggested weekly plan:\n\n**Monday & Wednesday**: 2 hours on Data Structures\n**Tuesday & Thursday**: 2 hours on Database Systems\n**Friday**: 2 hours on Linear Algebra\n**Weekend**: Review and practice problems\n\nRemember to take breaks and adjust based on upcoming deadlines. Would you like me to customize this further?";
    }
    
    if (lowerInput.includes("progress") || lowerInput.includes("performance")) {
      return "Let me analyze your academic progress:\n\n✅ **Strengths:**\n- Strong GPA of 3.63\n- Consistent performance across semesters\n- Good progress in core CS courses\n\n📈 **Opportunities:**\n- Focus on completing Math requirements\n- Consider taking more electives in your area of interest\n- Maintain current momentum in CS301 (65% progress)\n\nYou're on track to graduate on time! Keep up the great work!";
    }
    
    if (lowerInput.includes("course") || lowerInput.includes("next semester")) {
      return "Based on your current progress and degree requirements, here are my recommendations for next semester:\n\n**Core Courses:**\n- CS400: Software Engineering (builds on CS301)\n- CS450: Operating Systems\n\n**Math Requirement:**\n- MATH301: Discrete Mathematics\n\n**Elective:**\n- Choose from CS electives based on your interests (AI, Security, Web Development)\n\nWould you like more details about any of these courses?";
    }
    
    return "I'm here to help! I can assist with:\n- Study strategies and tips\n- Course recommendations\n- Schedule planning\n- Academic progress analysis\n- General academic questions\n\nFeel free to ask me anything!";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-indigo-600" />
          AI Learning Assistant
        </h2>
        <p className="text-gray-600">Get personalized help and recommendations</p>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleQuickAction(action.prompt)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{action.title}</h4>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Chat Interface */}
      <Card>
        <CardHeader>
          <CardTitle>Chat with AI Assistant</CardTitle>
          <CardDescription>Ask questions and get instant help</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Messages */}
          <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.type === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.type === "ai" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                      <Badge variant="secondary" className="text-xs">AI Assistant</Badge>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <Button
              onClick={handleSend}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Features */}
      <Card>
        <CardHeader>
          <CardTitle>What can the AI Assistant do?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <p className="font-medium text-gray-900">Study Recommendations</p>
                <p className="text-sm text-gray-600">Personalized study tips and strategies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <p className="font-medium text-gray-900">Course Guidance</p>
                <p className="text-sm text-gray-600">Help with course selection and planning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <p className="font-medium text-gray-900">Progress Analysis</p>
                <p className="text-sm text-gray-600">Track and analyze your academic performance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <p className="font-medium text-gray-900">24/7 Availability</p>
                <p className="text-sm text-gray-600">Get help whenever you need it</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
