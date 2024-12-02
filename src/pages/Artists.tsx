import { Search, Play } from "lucide-react";
import { Input } from "@/components/ui/input";

const artists = [
  { id: 1, name: "Artist Name", followers: "1.2M followers" },
  { id: 2, name: "Artist Name", followers: "850K followers" },
  { id: 3, name: "Artist Name", followers: "2.1M followers" },
  { id: 4, name: "Artist Name", followers: "920K followers" },
  { id: 5, name: "Artist Name", followers: "1.5M followers" },
  { id: 6, name: "Artist Name", followers: "750K followers" },
];

const Artists = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/40 to-secondary/20 pt-6 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Artists</h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search artists"
              className="pl-10 bg-white/10 border-none text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer text-center"
            >
              <div className="aspect-square bg-white/10 rounded-full mb-4 relative overflow-hidden group mx-auto">
                <img src="/placeholder.svg" alt={artist.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Play size={24} className="text-white" />
                  </button>
                </div>
              </div>
              <h3 className="text-white text-xl font-medium">{artist.name}</h3>
              <p className="text-gray-400">{artist.followers}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;