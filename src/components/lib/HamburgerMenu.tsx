
import React from 'react';
import { Menu, Home, FileText, Bell, Settings, LogOut } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HamburgerMenuProps {
  className?: string;
  side?: 'left' | 'right';
  onHome?: () => void;
  onDocuments?: () => void;
  onNotifications?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  side = 'left',
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

  const menuItems = [
    {
      label: 'Home',
      icon: Home,
      onClick: handleHome,
      className: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
    },
    {
      label: 'My Documents',
      icon: FileText,
      onClick: handleDocuments,
      className: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
    },
    {
      label: 'Notifications',
      icon: Bell,
      onClick: handleNotifications,
      className: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
    },
    {
      label: 'Settings',
      icon: Settings,
      onClick: handleSettings,
      className: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
    },
    {
      label: 'Logout',
      icon: LogOut,
      onClick: handleLogout,
      className: 'text-red-600 hover:text-red-700 hover:bg-red-50',
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
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
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side={side} 
        className="w-[80vw] sm:w-[350px] p-0"
        role="navigation"
        aria-modal="true"
      >
        <SheetHeader className="px-6 py-4 border-b border-gray-200">
          <SheetTitle className="text-left text-lg font-semibold text-gray-900">
            Menu
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col py-4">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className={cn(
                'flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors duration-200 w-full text-left',
                item.className,
                index === menuItems.length - 1 && 'border-t border-gray-200 mt-2 pt-5'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
