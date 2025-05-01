'use client';

import Image from 'next/image';

export default function Yukarı() {
  return (
    <div className="p-4 space-y-4"> {/* Padding ve spacing küçültüldü */}
      <div className="flex justify-between items-center mb-0"> {/* Margin küçültüldü */}
        <h1 className="text-2xl font-medium text-gray-800">Dashboard</h1> {/* Yazı boyutu küçültüldü */}
        <div className="flex items-center space-x-3"> {/* Spacing küçültüldü */}
          <div className="text-right">
            <p className="font-medium text-gray-800 text-sm">Alex Meian</p> {/* Yazı boyutu küçültüldü */}
            <p className="text-xs text-gray-500">Product manager</p> {/* Yazı boyutu küçültüldü */}
          </div>
          <Image
            src="/images/abc.png"
            alt="Profile Picture"
            width={30} /* Boyut küçültüldü */
            height={30} /* Boyut küçültüldü */
            className="rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5"> {/* Grid gap artırıldı */}
        {/* Projects */}
        <div className="bg-blue-100 rounded-lg p-4 shadow-md h-full flex flex-col items-center space-y-2"> {/* Arka plan rengi değiştirildi ve düzenleme yapıldı */}
          <div className="bg-orange-300 p-3 rounded-full flex items-center justify-center">📁</div> {/* İkon boyutu düzenlendi */}
          <div className="text-center"> {/* Yazılar ortalandı */}
            <p className="text-sm text-gray-500">Projects</p> {/* Yazı boyutu düzenlendi */}
            <p className="text-lg font-bold">95 <span className="text-gray-400 text-sm">/100</span></p> {/* Yazı boyutu düzenlendi */}
            <p className="text-xs text-red-500">🔻 10% decrease from last month</p> {/* Yazı boyutu düzenlendi */}
          </div>
        </div>

        {/* Time spent */}
        <div className="bg-blue-100 rounded-lg p-4 shadow-md h-full flex flex-col items-center space-y-2"> {/* Arka plan rengi değiştirildi ve düzenleme yapıldı */}
          <div className="bg-blue-400 p-3 rounded-full flex items-center justify-center">⏱️</div> {/* İkon boyutu düzenlendi */}
          <div className="text-center"> {/* Yazılar ortalandı */}
            <p className="text-sm text-gray-500">Time spent</p> {/* Yazı boyutu düzenlendi */}
            <p className="text-lg font-bold">1022 <span className="text-gray-400 text-sm">/1300 Hrs</span></p> {/* Yazı boyutu düzenlendi */}
            <p className="text-xs text-green-500">🔺 8% increase from last month</p> {/* Yazı boyutu düzenlendi */}
          </div>
        </div>

        {/* Today’s Meetings */}
        <div className="bg-blue-100 rounded-lg p-3 shadow-md h-full"> {/* Arka plan rengi değiştirildi */}
          <h3 className="text-base font-medium mb-3 text-gray-700">Today’s Meetings</h3> {/* Yazı boyutu küçültüldü */}
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center justify-between mb-2 last:mb-0"> {/* Margin küçültüldü */}
              <div className="flex items-center space-x-2"> {/* Spacing küçültüldü */}
                <Image
                  src="/images/abc.png"
                  alt="Person"
                  width={30} /* Boyut küçültüldü */
                  height={30} /* Boyut küçültüldü */
                  className="rounded-full"
                />
                <span className="text-gray-700 text-sm">Mobil Proje Tasarım Toplantısı</span> {/* Yazı boyutu küçültüldü */}
              </div>
              <div className="flex items-center space-x-2"> {/* Spacing küçültüldü */}
                <div className="text-gray-500 text-xs border rounded px-2 py-1">14:00-15:00</div> {/* Yazı boyutu ve padding küçültüldü */}
                <button className="bg-orange-400 text-white px-3 py-1 rounded-full hover:bg-orange-500 transition text-xs">Detaylar</button> {/* Yazı boyutu ve padding küçültüldü */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
