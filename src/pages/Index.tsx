import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import SlackCTA from "@/components/SlackCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [waitlistCount, setWaitlistCount] = useState<number>(0);

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

  return (
    <div className="min-h-screen bg-white relative">
      {/* Checkered Background Pattern */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F1F0FB 1px, transparent 1px),
            linear-gradient(to bottom, #F1F0FB 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: '0.4'
        }}
      />

      <div className="relative">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Features />
          <WaitlistForm onSuccess={fetchWaitlistCount} />
          
          <p className="mt-4 text-center text-sm sm:text-base text-purple-600 font-semibold">
            {waitlistCount} {waitlistCount === 1 ? 'person has' : 'people have'} joined the waitlist
          </p>
          
          <SlackCTA />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;