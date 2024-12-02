import { Plus, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const playlists = [
  { id: 1, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop" },
  { id: 2, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&h=500&fit=crop" },
  { id: 3, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop" },
  { id: 4, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=500&h=500&fit=crop" },
  { id: 5, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1671726203449-c7a0e1209f67?w=500&h=500&fit=crop" },
  { id: 6, name: "Playlist Name", songCount: 10, image: "https://images.unsplash.com/photo-1671726203454-488ab18f7eda?w=500&h=500&fit=crop" },
];

const likedSongs = [
  { id: 1, title: "Starlight", artist: "Cosmic Dreams", image: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=500&h=500&fit=crop" },
  { id: 2, title: "Neon City", artist: "Urban Echo", image: "https://images.unsplash.com/photo-1671726203449-c7a0e1209f67?w=500&h=500&fit=crop" },
  { id: 3, title: "Ocean Breeze", artist: "Wave Riders", image: "https://images.unsplash.com/photo-1671726203454-488ab18f7eda?w=500&h=500&fit=crop" },
];

const Playlists = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary/50 pt-6 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Your Playlists</h1>
          <Button className="bg-primary hover:bg-primary/80">
            <Plus className="mr-2 h-4 w-4" /> Create Playlist
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-pink-500 to-purple-600 border-none col-span-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Liked Songs</h3>
                  <p className="text-white/80">{likedSongs.length} songs</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {likedSongs.map((song) => (
                  <div key={song.id} className="flex items-center gap-3 bg-white/10 p-2 rounded-lg">
                    <img src={song.image} alt={song.title} className="w-10 h-10 rounded" />
                    <div>
                      <p className="text-white text-sm font-medium">{song.title}</p>
                      <p className="text-white/60 text-xs">{song.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-colors cursor-pointer group"
            >
              <div className="aspect-square bg-white/5 rounded-lg mb-4 overflow-hidden relative">
                <img 
                  src={playlist.image} 
                  alt={playlist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
              <h3 className="text-white font-medium">{playlist.name}</h3>
              <p className="text-gray-400 text-sm">{playlist.songCount} songs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlists;