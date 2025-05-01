'use client';

import Image from 'next/image';
import { colors } from '@/theme/colors';

export default function Header() {
  return (
    <div 
      className="p-3 md:p-4 lg:p-5 rounded-xl" 
      style={{ backgroundColor: colors.lightBlue }}
    >
      {/* Header Top - User Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <h1 className="text-xl md:text-2xl font-bold" style={{ color: colors.darkBlue }}>Dashboard</h1>
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="font-medium text-sm" style={{ color: colors.darkBlue }}>Alex Meian</p>
            <p className="text-xs" style={{ color: colors.blue }}>Product manager</p>
          </div>
          <div className="relative">
            <Image
              src="/images/abc.png"
              alt="Profile Picture"
              width={32}
              height={32}
              className="rounded-full border-2 border-white shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
        {/* Projects - 3 columns on large screens - IMPROVED UI */}
        <div 
          className="lg:col-span-3 rounded-lg p-3 shadow-md flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-lg h-[150px]" 
          style={{ 
            background: `linear-gradient(145deg, ${colors.transparentWhite}, rgba(255, 255, 255, 0.5))`,
            borderWidth: '1px', 
            borderStyle: 'solid',
            borderColor: `${colors.blue}40`
          }}
        >
          {/* Decorative elements */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -mr-10 -mt-10" 
            style={{ background: `linear-gradient(45deg, ${colors.orange}, ${colors.blue})` }}
          ></div>
          
          <div className="flex items-center mb-2 z-10">
            <div 
              className="p-1.5 rounded-lg flex items-center justify-center text-white shadow-md mr-2"
              style={{ 
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.orange}cc)`,
                boxShadow: `0 5px 10px -3px ${colors.orange}30`
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <p className="text-sm font-medium" style={{ color: colors.darkBlue }}>Projects</p>
          </div>
          
          <div className="z-10">
            <div className="flex items-end justify-between mb-2">
              <p className="text-xl font-bold" style={{ color: colors.darkBlue }}>
                95
                <span style={{ color: colors.blue }} className="text-xs ml-1">/100</span>
              </p>
              <div 
                className="px-1.5 py-0.5 rounded-full flex items-center bg-red-100 text-red-600 text-xs font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>10%</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1.5">
              <div 
                className="h-1.5 rounded-full" 
                style={{ 
                  width: '95%',
                  background: `linear-gradient(to right, ${colors.blue}, ${colors.orange})`
                }}
              ></div>
            </div>
            
            <div className="flex justify-between text-xs">
              <span style={{ color: colors.blue }}>Completed</span>
              <span style={{ color: colors.darkBlue }}>95%</span>
            </div>
          </div>
        </div>

        {/* Time spent - 3 columns on large screens - IMPROVED UI */}
        <div 
          className="lg:col-span-3 rounded-lg p-3 shadow-md flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-lg h-[150px]"
          style={{ 
            background: `linear-gradient(145deg, ${colors.transparentWhite}, rgba(255, 255, 255, 0.5))`,
            borderWidth: '1px', 
            borderStyle: 'solid',
            borderColor: `${colors.blue}40`
          }}
        >
          {/* Decorative elements */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -mr-10 -mt-10"
            style={{ background: `linear-gradient(45deg, ${colors.blue}, ${colors.darkBlue})` }}
          ></div>
          
          <div className="flex items-center mb-2 z-10">
            <div 
              className="p-1.5 rounded-lg flex items-center justify-center text-white shadow-md mr-2"
              style={{ 
                background: `linear-gradient(135deg, ${colors.blue}, ${colors.blue}cc)`,
                boxShadow: `0 5px 10px -3px ${colors.blue}30`
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium" style={{ color: colors.darkBlue }}>Time spent</p>
          </div>
          
          <div className="z-10">
            <div className="flex items-end justify-between mb-2">
              <p className="text-xl font-bold" style={{ color: colors.darkBlue }}>
                1022
                <span style={{ color: colors.blue }} className="text-xs ml-1">/1300</span>
              </p>
              <div 
                className="px-1.5 py-0.5 rounded-full flex items-center bg-green-100 text-green-600 text-xs font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>8%</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1.5">
              <div 
                className="h-1.5 rounded-full" 
                style={{ 
                  width: '78.6%',
                  background: `linear-gradient(to right, ${colors.darkBlue}, ${colors.blue})`
                }}
              ></div>
            </div>
            
            <div className="flex justify-between text-xs">
              <span style={{ color: colors.blue }}>Monthly goal</span>
              <span style={{ color: colors.darkBlue }}>79%</span>
            </div>
          </div>
        </div>

        {/* Today's Meetings - 6 columns on large screens - FIXED HEADER WITH SCROLLABLE CONTENT */}
        <div 
          className="lg:col-span-6 rounded-lg shadow-md transition-all hover:shadow-lg h-[150px] flex flex-col overflow-hidden" 
          style={{ 
            backgroundColor: colors.transparentWhite, 
            borderWidth: '1px', 
            borderStyle: 'solid',
            borderColor: colors.blue 
          }}
        >
          {/* Fixed header section */}
          <div className="p-3 pb-2 border-b border-blue-100/50">
            <h3 className="text-sm font-medium flex items-center" style={{ color: colors.darkBlue }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Today&apos;s Meetings
            </h3>
          </div>
          
          {/* Scrollable content section */}
          <div className="flex-1 overflow-y-auto p-3 pt-2 space-y-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-1.5 rounded-md bg-white/70 backdrop-blur-sm transition-colors hover:bg-white/90">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/abc.png"
                    alt="Person"
                    width={24}
                    height={24}
                    className="rounded-full border border-white shadow-sm"
                  />
                  <div>
                    <span className="text-xs font-medium block" style={{ color: colors.darkBlue }}>Mobil Proje Tasarım</span>
                    <span className="text-[10px] text-gray-500 block">Team discussion</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div 
                    className="text-[10px] rounded-full px-1.5 py-0.5 flex items-center justify-center" 
                    style={{ 
                      color: colors.blue, 
                      backgroundColor: 'rgba(33, 158, 188, 0.1)',
                      borderWidth: '1px', 
                      borderStyle: 'solid', 
                      borderColor: colors.blue 
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    14:00
                  </div>
                  <button 
                    className="text-white px-2 py-0.5 rounded-full text-[10px] hover:opacity-90 transition flex items-center justify-center" 
                    style={{ backgroundColor: colors.orange }}
                  >
                    <span>Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}