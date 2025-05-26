
import React from 'react';
import { Menu, Home, FileText, Bell, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HamburgerMenuProps {
  className?: string;
  onHome?: () => void;
  onDocuments?: () => void;
  onNotifications?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  onHome,
  onDocuments,
  onNotifications,
  onSettings,
  onLogout,
}) => {
  const handleHome = () => {
    onHome?.();
    console.log('Home clicked');
  };

  const handleDocuments = () => {
    onDocuments?.();
    console.log('My Documents clicked');
  };

  const handleNotifications = () => {
    onNotifications?.();
    console.log('Notifications clicked');
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
          aria-label="Main menu"
          aria-haspopup="true"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent
        align="end"
        className="w-56 bg-white border border-gray-200 shadow-lg rounded-md"
        sideOffset={8}
      >
        <DropdownMenuItem
          onClick={handleHome}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={handleDocuments}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
        >
          <FileText className="h-4 w-4" />
          <span>My Documents</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={handleNotifications}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
        >
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
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

export default HamburgerMenu;
