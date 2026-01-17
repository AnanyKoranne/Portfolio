'use client'

import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

// Navigation dock items
const dockItems = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Projects',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Email',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative pb-32">
      <div className="text-center max-w-4xl px-8 flex-1 flex items-center justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
            Dashboard
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Welcome to your portfolio dashboard. Your content goes here.
          </p>
          
          {/* Placeholder content sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors">
              <h2 className="text-xl font-light mb-4">Projects</h2>
              <p className="text-gray-500">Your project showcase will appear here</p>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors">
              <h2 className="text-xl font-light mb-4">About</h2>
              <p className="text-gray-500">Your bio and skills will appear here</p>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors">
              <h2 className="text-xl font-light mb-4">Experience</h2>
              <p className="text-gray-500">Your work experience will appear here</p>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors">
              <h2 className="text-xl font-light mb-4">Contact</h2>
              <p className="text-gray-500">Your contact information will appear here</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Apple-style dock in lower middle section */}
      <div className='fixed bottom-4 left-1/2 -translate-x-1/2 z-50'>
        <Dock className='items-end pb-3'>
          {dockItems.map((item, idx) => (
            <DockItem
              key={idx}
              className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </div>
  )
}
