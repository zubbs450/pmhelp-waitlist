import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WaitlistForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
      onSuccess();
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
    <div className="max-w-xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Join the Waitlist
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
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

      <Alert className="mt-8 rounded-xl border-purple-100 bg-purple-50">
        <AlertDescription className="text-sm sm:text-base text-purple-800">
          By joining the waitlist, you'll get exclusive updates and early access opportunities.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default WaitlistForm;