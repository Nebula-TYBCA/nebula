import { Search, Play, User, Crown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  "All", "Relax", "Sad", "Party", "Romance", "Energetic", "Relaxing", "Jazz", "Alternative"
];

const popularSongs = [
  { id: 1, title: "Midnight Tales", artist: "Luna Echo", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop" },
  { id: 2, title: "Neon Dreams", artist: "The Wavelengths", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=500&fit=crop" },
  { id: 3, title: "Stellar Journey", artist: "Cosmic Drift", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop" },
  { id: 4, title: "Urban Pulse", artist: "City Lights", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop" },
  { id: 5, title: "Ocean Waves", artist: "Deep Blue", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop" },
];

const recentlyPlayed = [
  { id: 1, title: "Late Night Vibes", artist: "Moonlight", image: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=500&h=500&fit=crop" },
  { id: 2, title: "Summer Breeze", artist: "Sunset Collective", image: "https://images.unsplash.com/photo-1671726203449-c7a0e1209f67?w=500&h=500&fit=crop" },
  { id: 3, title: "Electric Dreams", artist: "Neon Pulse", image: "https://images.unsplash.com/photo-1671726203454-488ab18f7eda?w=500&h=500&fit=crop" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary/50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollArea className="mb-8">
          <div className="flex gap-4 pb-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm whitespace-nowrap transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollArea>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Popular Now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularSongs.map((song) => (
              <div key={song.id} className="group relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                  />
                </div>
                <button className="absolute right-2 bottom-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-5 h-5 text-white" />
                </button>
                <h3 className="text-white font-medium mt-2 truncate">{song.title}</h3>
                <p className="text-gray-400 text-sm truncate">{song.artist}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recently Played</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentlyPlayed.map((song) => (
              <Card key={song.id} className="bg-white/10 border-none">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={song.image}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-medium truncate">{song.title}</h3>
                      <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                    </div>
                    <button className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;