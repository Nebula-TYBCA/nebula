import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Playlists from "./pages/Playlists";
import Categories from "./pages/Categories";
import Artists from "./pages/Artists";
import Settings from "./pages/Settings";
import Premium from "./pages/Premium";
import { useState } from "react";

// Define User type
interface User {
  name: string;
  email: string;
}

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLoginOrSignUp = (userInfo: User) => {
    setUser(userInfo);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (!isLoggedIn) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLoginOrSignUp} />} />
              <Route path="/signup" element={<SignUp onSignUp={handleLoginOrSignUp} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex">
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
              <Sidebar onLogout={handleLogout} />
            </div>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md p-4">
              <div className="flex items-center justify-between">
                {/* Larger logo for mobile */}
                <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto mr-2" />

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0 w-64">
                    <Sidebar onLogout={handleLogout} />
                  </SheetContent>
                </Sheet>
                <span className="text-white font-bold">Nebula</span>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <main className="flex-1 md:ml-64 pt-[72px] md:pt-0">
              <div className="p-4 hidden md:flex items-center justify-between bg-secondary/95 backdrop-blur-md">
                <div className="relative flex-1 max-w-xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search for artists, songs, or playlists"
                    className="pl-10 bg-white/10 border-none text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <span className="text-white">{user?.name}</span>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Routes */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/profile" element={<Profile user={user || { name: "", email: "" }} />} />
                <Route path="/playlists" element={<Playlists />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/premium" element={<Premium />} />
              </Routes>
            </main>
            <MusicPlayer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
