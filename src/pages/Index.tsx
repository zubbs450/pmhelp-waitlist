import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number>(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchWaitlistCount();
  }, []);

  const fetchWaitlistCount = async () => {
    try {
      const { count, error } = await supabase
        .from("waitlist")
        .select("*", { count: 'exact', head: true });

      if (error) throw error;
      setWaitlistCount(count || 0);
    } catch (error) {
      console.error("Error fetching waitlist count:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Successfully joined waitlist!",
        description: "We'll notify you when we launch.",
      });

      setEmail("");
      fetchWaitlistCount();
    } catch (error: any) {
      console.error("Error:", error);
      
      if (error.code === '23505') {
        toast({
          variant: "destructive",
          title: "Already on the waitlist",
          description: "This email has already been registered.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error joining waitlist",
          description: "Please try again later.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            The Complete Path to
            <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Product Mastery
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl">
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
              className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Join the Waitlist
            </h2>
            <p className="mt-3 text-gray-600">
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
                className="w-full h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Start Your Journey →"}
            </Button>
          </form>

          <p className="mt-4 text-center text-lg text-purple-600 font-semibold">
            {waitlistCount} {waitlistCount === 1 ? 'person has' : 'people have'} joined the waitlist
          </p>

          <Alert className="mt-8 rounded-xl border-purple-100 bg-purple-50">
            <AlertDescription className="text-purple-800">
              By joining the waitlist, you'll get exclusive updates and early access opportunities.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default Index;