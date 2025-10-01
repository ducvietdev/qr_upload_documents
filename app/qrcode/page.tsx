"use client";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

export default function QRPage() {
  const [shareId] = useState("doc"); // Fixed to share1
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Tự động tạo URL dựa trên domain hiện tại
    if (typeof window !== "undefined") {
      setCurrentUrl(`${window.location.origin}/share/${shareId}`);
    }
  }, [shareId]);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl text-white">📱</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 px-4">
            Tạo mã QR Code
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
            Quét mã QR để truy cập tài liệu
          </p>
        </div>

        {/* QR Code Section */}
        {currentUrl && (
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              Mã QR tài liệu
            </h2>
            
            {/* QR Code Container */}
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg mb-4 sm:mb-6 inline-block">
              <QRCode 
                value={currentUrl} 
                size={window.innerWidth < 640 ? 220 : 280}
                style={{ 
                  height: "auto", 
                  maxWidth: "100%", 
                  width: "100%",
                  border: "8px solid white",
                  borderRadius: "8px"
                }} 
              />
            </div>

            {/* URL Display */}
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">Liên kết tài liệu:</p>
              <code className="block text-blue-800 font-mono text-sm sm:text-base lg:text-lg break-all">
                {currentUrl}
              </code>
            </div>

            {/* Instructions */}
            <div className="text-left bg-yellow-50 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center text-sm sm:text-base">
                <span className="mr-2">📋</span>
                Hướng dẫn sử dụng:
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-red-600 flex-shrink-0">1.</span>
                  <span>Sử dụng camera điện thoại hoặc app quét QR code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-red-600 flex-shrink-0">2.</span>
                  <span>Quét mã QR phía trên</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-red-600 flex-shrink-0">3.</span>
                  <span>Truy cập link để xem và tải xuống tài liệu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-red-600 flex-shrink-0">4.</span>
                  <span>Đảm bảo thiết bị kết nối cùng mạng wifi/LAN</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            {/* <div className="mt-6 sm:mt-8">
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🔗</span>
                Xem trước trang
              </a>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
