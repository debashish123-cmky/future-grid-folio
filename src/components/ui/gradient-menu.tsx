import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoHomeOutline, IoPersonOutline, IoDocumentTextOutline, IoMailOutline, IoSettingsOutline } from 'react-icons/io5';

const menuItems = [
  { title: 'Home', icon: <IoHomeOutline />, gradientFrom: '#177ddd', gradientTo: '#7c3aed', path: '/' },
  { title: 'Career', icon: <IoPersonOutline />, gradientFrom: '#56CCF2', gradientTo: '#2F80ED', path: '/career' },
  { title: 'Projects', icon: <IoDocumentTextOutline />, gradientFrom: '#FF9966', gradientTo: '#FF5E62', path: '/projects' },
  { title: 'Contact', icon: <IoMailOutline />, gradientFrom: '#80FF72', gradientTo: '#7EE8FA', path: '/contact' },
  { title: 'Settings', icon: <IoSettingsOutline />, gradientFrom: '#a855f7', gradientTo: '#ec4899', path: '/settings' }
];

export default function GradientMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-4">
        {menuItems.map(({ title, icon, gradientFrom, gradientTo, path }, idx) => {
          const isActive = location.pathname === path;
          return (
            <li
              key={idx}
              style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
              className={`relative w-[60px] h-[60px] backdrop-blur-md bg-card/20 border border-border/30 shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] hover:shadow-none group cursor-pointer ${
                isActive ? 'w-[180px] bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]' : ''
              }`}
              onClick={() => handleNavigation(path)}
            >
              {/* Gradient background on hover */}
              <span className={`absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                isActive ? 'opacity-100' : ''
              }`}></span>
              {/* Blur glow */}
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

              {/* Icon */}
              <span className={`relative z-10 transition-all duration-500 group-hover:scale-0 delay-0 ${
                isActive ? 'scale-0' : ''
              }`}>
                <span className="text-2xl text-foreground">{icon}</span>
              </span>

              {/* Title */}
              <span className={`absolute text-white uppercase tracking-wide text-sm transition-all duration-500 scale-0 group-hover:scale-100 delay-150 ${
                isActive ? 'scale-100' : ''
              }`}>
                {title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}