import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from "lucide-react";
import { Slider } from "./ui/slider";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-secondary/95 backdrop-blur-md border-t border-white/10">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4 w-1/4 min-w-[120px]">
          <img src="/placeholder.svg" alt="Album art" className="w-12 h-12 rounded" />
          <div className="hidden sm:block">
            <h4 className="text-sm font-medium text-white truncate">Song Title</h4>
            <p className="text-xs text-gray-400 truncate">Artist Name</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center flex-1 max-w-2xl px-4">
          <div className="flex items-center gap-2 sm:gap-4 mb-2">
            <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={24} />
            </button>
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
              <Play size={20} className="text-white" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={24} />
            </button>
            <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">
              <Repeat size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-gray-400 hidden sm:block">0:00</span>
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-xs text-gray-400 hidden sm:block">3:45</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2 w-1/4 justify-end">
          <Volume2 size={20} className="text-gray-400" />
          <Slider
            defaultValue={[75]}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;