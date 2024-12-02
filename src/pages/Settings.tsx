import { Bell, Volume2, Shield, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface SettingsProps {
  user: { email: string | null }; // Define user prop type
}

const Settings = ({ user }: SettingsProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary/50 pt-6 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-white">Account Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Email</label>
                <Input 
                  value={user?.email || ""} // Use dynamic user email here
                  className="bg-white/10 border-white/20 text-white"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Password</label>
                <Input 
                  type="password" 
                  value="••••••••"
                  className="bg-white/10 border-white/20 text-white"
                  readOnly
                />
                <p className="text-sm text-gray-400 mt-1">Last changed 3 months ago</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-white">Notifications</h2>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-sm text-gray-400">Get notified about new releases</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Volume2 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-white">Playback Settings</h2>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Audio Quality</p>
                <p className="text-sm text-gray-400">Set your preferred audio quality</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-white">Privacy</h2>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Profile Visibility</p>
                <p className="text-sm text-gray-400">Control who can see your profile</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
