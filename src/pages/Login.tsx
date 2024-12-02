import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Login = ({ onLogin }: { onLogin: (userInfo: { name: string; email: string }) => void }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock user data (you can replace this with actual form inputs or API response)
    const userInfo = {
      name: "Savita Hadapad", // Replace with real user input if needed
      email: "Savitahd11@gmail.com", // Replace with real user input if needed
    };

    // Call onLogin with the user info
    onLogin(userInfo);
    toast.success("Successfully logged in!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-300">Sign in to continue to Nebula</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/80">
              Sign In
            </Button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
