import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-4">
          {/* Logo placeholder - bạn có thể thay thế bằng logo thật */}
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-red-800 font-bold text-xl">🎖️</div>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              TRƯỜNG SĨ QUAN PHÁO BINH
            </h1>
            <p className="text-red-100 text-sm md:text-base mt-1">
              Hệ thống chia sẻ tài liệu điện tử
            </p>
          </div>
          
          {/* Star decoration */}
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-red-800 font-bold text-xl">⭐</div>
          </div>
        </div>
      </div>
    </header>
  );
}