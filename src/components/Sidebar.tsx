import { Link, useLocation } from "react-router-dom";
import { Home, LayoutGrid, Mic2, ListMusic, User, Settings, LogOut, Crown } from "lucide-react";
import { toast } from "sonner";

const Sidebar = ({ onLogout }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    onLogout();
    toast.success("Logged out successfully");
  };

  const links = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutGrid, label: "Categories", path: "/categories" },
    { icon: Mic2, label: "Artists", path: "/artists" },
    { icon: ListMusic, label: "Playlists", path: "/playlists" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Crown, label: "Premium", path: "/premium" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="h-full w-64 bg-secondary/95 backdrop-blur-md p-5 flex flex-col">
      {/* Updated Logo Section */}
      <Link to="/" className="flex items-center gap-3 mb-8">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-16 h-16 object-contain"
        />
        <span className="text-2xl font-bold text-white">Nebula</span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-primary/20 text-primary"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors mt-auto"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
