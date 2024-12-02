import { Camera, Edit } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const recentActivity = [
  { id: 1, title: "Song Title", artist: "Artist Name", image: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=500&h=500&fit=crop" },
  { id: 2, title: "Song Title", artist: "Artist Name", image: "https://images.unsplash.com/photo-1671726203449-c7a0e1209f67?w=500&h=500&fit=crop" },
  { id: 3, title: "Song Title", artist: "Artist Name", image: "https://images.unsplash.com/photo-1671726203454-488ab18f7eda?w=500&h=500&fit=crop" },
];

const playlists = [
  { id: 1, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=500&h=500&fit=crop" },
  { id: 2, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1671726203449-c7a0e1209f67?w=500&h=500&fit=crop" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary/50 pt-6 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search for a song"
            className="w-full max-w-xl bg-white/10 border-none text-white placeholder:text-gray-400 mb-6"
          />
          <div className="absolute right-4 top-2">
            <Avatar className="h-8 w-8 bg-primary">
              <AvatarFallback>MH</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 bg-primary">
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-white">
                  <Camera size={16} />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">SAVITA HADAPAD</h1>
                <p className="text-gray-400">Premium Member</p>
              </div>
            </div>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <img src={item.image} alt={item.title} className="w-12 h-12 rounded" />
                  <div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Your Playlists</h2>
            <div className="space-y-4">
              {playlists.map((playlist) => (
                <div key={playlist.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <img src={playlist.image} alt={playlist.name} className="w-12 h-12 rounded" />
                  <div>
                    <h3 className="text-white font-medium">{playlist.name}</h3>
                    <p className="text-gray-400 text-sm">{playlist.songCount} songs</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;