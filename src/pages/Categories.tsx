import { Search, Play } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { id: 1, name: "Pop", songCount: 120 },
  { id: 2, name: "Rock", songCount: 85 },
  { id: 3, name: "Jazz", songCount: 45 },
  { id: 4, name: "Classical", songCount: 67 },
  { id: 5, name: "Electronic", songCount: 93 },
  { id: 6, name: "Hip Hop", songCount: 78 },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/40 to-secondary/20 pt-6 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Categories</h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search categories"
              className="pl-10 bg-white/10 border-none text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="aspect-square bg-white/10 rounded-lg mb-4 relative overflow-hidden group">
                <img src="/placeholder.svg" alt={category.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Play size={24} className="text-white" />
                  </button>
                </div>
              </div>
              <h3 className="text-white text-xl font-medium">{category.name}</h3>
              <p className="text-gray-400">{category.songCount} songs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;