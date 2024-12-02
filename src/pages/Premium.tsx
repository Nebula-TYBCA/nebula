import { Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Premium = () => {
  const features = [
    "Ad-free music listening",
    "Offline playback",
    "High-quality audio",
    "Listen with friends in real-time",
    "Exclusive content access",
    "Early access to new features",
  ];

  const handleSubscribe = () => {
    toast.success("Redirecting to payment...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary/50 pt-6 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Upgrade to Premium</h1>
          <p className="text-gray-300 text-lg">Unlock the full potential of your music experience</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Premium Plan</h2>
            <p className="text-5xl font-bold text-primary mb-4">$9.99</p>
            <p className="text-gray-300">per month</p>
          </div>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button 
            onClick={handleSubscribe}
            className="w-full bg-primary hover:bg-primary/80 text-white"
          >
            Start Premium
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Premium;