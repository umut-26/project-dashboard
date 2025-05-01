'use client';

import Image from 'next/image';
import { colors } from '@/theme/colors'; // colors.ts'dan renk paletini import ediyoruz

export default function Header() {
  return (
    <div className="p-4 space-y-4" style={{ backgroundColor: colors.lightBlue }}> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
      <div className="flex justify-between items-center mb-0"> 
        <h1 className="text-2xl font-medium" style={{ color: colors.darkBlue }}>Dashboard</h1> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="font-medium text-sm" style={{ color: colors.darkBlue }}>Alex Meian</p> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
            <p className="text-xs" style={{ color: colors.blue }}>Product manager</p> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
          </div>
          <Image
            src="/images/abc.png"
            alt="Profile Picture"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Projects */}
        <div 
          className="rounded-lg p-4 shadow-md h-full flex flex-col items-center space-y-2" 
          style={{ 
            backgroundColor: colors.transparentWhite, 
            borderWidth: '1px', 
            borderStyle: 'solid',
            borderColor: colors.blue 
          }}
        > {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
          <div className="p-3 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colors.orange }}>📁</div> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
          <div className="text-center">
            <p className="text-sm" style={{ color: colors.blue }}>Projects</p> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
            <p className="text-lg font-bold" style={{ color: colors.darkBlue }}>95 <span style={{ color: colors.blue }} className="text-sm">/100</span></p> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
            <p className="text-xs text-red-500">🔻 10% decrease from last month</p>
          </div>
        </div>

        {/* Time spent */}
        <div 
          className="rounded-lg p-4 shadow-md h-full flex flex-col items-center space-y-2" 
          style={{ 
            backgroundColor: colors.transparentWhite, 
            borderWidth: '1px', 
            borderStyle: 'solid',
            borderColor: colors.blue 
          }}
        > {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
          <div className="p-3 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colors.blue }}>⏱️</div> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
          <div className="text-center">
            <p className="text-sm" style={{ color: colors.blue }}>Time spent</p> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
            <p className="text-lg font-bold" style={{ color: colors.darkBlue }}>1022 <span style={{ color: colors.blue }} className="text-sm">/1300 Hrs</span></p> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
            <p className="text-xs text-green-500">🔺 8% increase from last month</p>
          </div>
        </div>

        {/* Today's Meetings */}
        <div 
          className="rounded-lg p-3 shadow-md h-full" 
          style={{ 
            backgroundColor: colors.transparentWhite, 
            borderWidth: '1px', 
            borderStyle: 'solid',
            borderColor: colors.blue 
          }}
        > {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
          <h3 className="text-base font-medium mb-3" style={{ color: colors.darkBlue }}>Today&apos;s Meetings</h3> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center justify-between mb-2 last:mb-0">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/abc.png"
                  alt="Person"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="text-sm" style={{ color: colors.darkBlue }}>Mobil Proje Tasarım Toplantısı</span> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
              </div>
              <div className="flex items-center space-x-2">
                <div 
                  className="text-xs rounded px-2 py-1" 
                  style={{ 
                    color: colors.blue, 
                    borderWidth: '1px', 
                    borderStyle: 'solid', 
                    borderColor: colors.blue 
                  }}
                >
                  14:00-15:00
                </div> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
                <button 
                  className="text-white px-3 py-1 rounded-full text-xs hover:opacity-80 transition" 
                  style={{ backgroundColor: colors.orange }}
                >
                  Detaylar
                </button> {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}