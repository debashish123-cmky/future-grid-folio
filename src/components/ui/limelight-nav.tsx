import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Mail, Briefcase } from 'lucide-react';

// --- Internal Types and Defaults ---

type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  path?: string;
  onClick?: () => void;
};

type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Default nav items with paths
  const defaultNavItems: NavItem[] = [
    { id: 'home', icon: <Home />, label: 'Home', path: '/' },
    { id: 'career', icon: <User />, label: 'Career', path: '/career' },
    { id: 'projects', icon: <Briefcase />, label: 'Projects', path: '/projects' },
    { id: 'contact', icon: <Mail />, label: 'Contact', path: '/contact' },
  ];

  const navItems = items || defaultNavItems;
  
  // Find active index based on current path
  const activeIndex = navItems.findIndex(item => item.path === location.pathname) !== -1 
    ? navItems.findIndex(item => item.path === location.pathname)
    : defaultActiveIndex;

  const [currentActive, setCurrentActive] = useState(activeIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (navItems.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[currentActive];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [currentActive, isReady, navItems]);

  // Update active index when location changes
  useLayoutEffect(() => {
    const newActiveIndex = navItems.findIndex(item => item.path === location.pathname);
    if (newActiveIndex !== -1) {
      setCurrentActive(newActiveIndex);
    }
  }, [location.pathname, navItems]);

  if (navItems.length === 0) {
    return null; 
  }

  const handleItemClick = (index: number, item: NavItem) => {
    setCurrentActive(index);
    onTabChange?.(index);
    
    if (item.path) {
      navigate(item.path);
    }
    
    item.onClick?.();
  };

  return (
    <nav className={`relative inline-flex items-center h-16 rounded-lg bg-card/20 backdrop-blur-md text-foreground border border-border/30 px-2 shadow-lg ${className}`}>
      {navItems.map((item, index) => (
          <a
            key={item.id}
            ref={el => (navItemRefs.current[index] = el)}
            className={`relative z-20 flex h-full cursor-pointer items-center justify-center p-5 ${iconContainerClassName}`}
            onClick={() => handleItemClick(index, item)}
            aria-label={item.label}
          >
            {cloneElement(item.icon, {
              className: `w-6 h-6 transition-opacity duration-100 ease-in-out ${
                currentActive === index ? 'opacity-100' : 'opacity-40'
              } ${item.icon.props.className || ''} ${iconClassName || ''}`,
            })}
          </a>
      ))}

      <div 
        ref={limelightRef}
        className={`absolute top-0 z-10 w-11 h-[5px] rounded-full bg-primary shadow-[0_50px_15px_var(--primary)] ${
          isReady ? 'transition-[left] duration-400 ease-in-out' : ''
        } ${limelightClassName}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-30%] top-[5px] w-[160%] h-14 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};