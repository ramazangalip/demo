"use client"
import SidebarApp from './SidebarApp'
import HomePage from './homePage'
export default function Home() {
    return (
      <div className='flex h-screen'>
            <SidebarApp/>
            <div className='flex-1 p-6 bg-gray-900'>
            <HomePage/>
            </div>
      </div>
    );
  }
  