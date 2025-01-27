import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/lib/supabase";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Insert into waitlist table
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email, status: "pending" }]);

      if (error) throw error;

      // Send welcome email using Supabase Edge Function
      const { error: emailError } = await supabase.functions.invoke("send-welcome-email", {
        body: { email },
      });

      if (emailError) throw emailError;

      toast({
        title: "Successfully joined waitlist!",
        description: "Check your email for confirmation.",
      });

      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error joining waitlist",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Product Management
            <span className="block text-blue-600">Virtual Experience</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Master product management through hands-on experience. Learn from industry experts and build your portfolio with real-world projects.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {[
            {
              title: "Real-World Projects",
              description: "Work on actual product cases from leading tech companies",
            },
            {
              title: "Expert Mentorship",
              description: "Get guidance from experienced product managers",
            },
            {
              title: "Portfolio Building",
              description: "Create a compelling PM portfolio that stands out",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Join the Waitlist
            </h2>
            <p className="mt-2 text-gray-600">
              Be the first to know when we launch and get early access.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>

          <Alert className="mt-8">
            <AlertDescription>
              By joining the waitlist, you'll get exclusive updates and early access opportunities.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default Index;