import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-sm">
            © 2025 Bộ Tư lệnh Pháo binh - Tên lửa | Thiết kế bởi Nhóm Phát triển Nội bộ
          </div>
          <div className="text-sm text-gray-400">
            Phiên bản 1.0 | Bảo mật thông tin
          </div>
        </div>
      </div>
    </footer>
  );
}