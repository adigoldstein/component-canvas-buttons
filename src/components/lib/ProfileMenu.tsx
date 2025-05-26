
import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProfileMenuProps {
  className?: string;
  onViewProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  userName?: string;
  userEmail?: string;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({
  className,
  onViewProfile,
  onSettings,
  onLogout,
  userName = "User",
  userEmail,
}) => {
  const handleViewProfile = () => {
    onViewProfile?.();
    console.log('View Profile clicked');
  };

  const handleSettings = () => {
    onSettings?.();
    console.log('Settings clicked');
  };

  const handleLogout = () => {
    onLogout?.();
    console.log('Logout clicked');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'h-10 w-10 rounded-full',
            'text-gray-600 hover:text-gray-800',
            'hover:bg-gray-100',
            'focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2',
            'transition-colors duration-200',
            className
          )}
          aria-label="Open profile menu"
          aria-haspopup="true"
        >
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent
        align="end"
        className="w-56 bg-white border border-gray-200 shadow-lg rounded-md"
        sideOffset={8}
      >
        {(userName || userEmail) && (
          <>
            <div className="px-3 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">{userName}</p>
              {userEmail && (
                <p className="text-xs text-gray-500 truncate">{userEmail}</p>
              )}
            </div>
            <DropdownMenuSeparator />
          </>
        )}
        
        <DropdownMenuItem
          onClick={handleViewProfile}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
        >
          <User className="h-4 w-4" />
          <span>View Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={handleSettings}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
