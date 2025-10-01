"use client";
import { useEffect } from "react";

// Define interface cho Zalo objects
interface ZaloJSV2Interface {
  zalo_h5_event_handler?: () => boolean;
  init?: () => boolean;
  ready?: (callback: () => void) => boolean;
  [key: string]: unknown;
}

interface ZaloSX2Interface {
  [key: string]: unknown;
}

// Declare types cho window để tránh lỗi TypeScript
declare global {
  interface Window {
    ZaloSX2?: ZaloSX2Interface;
    zaloJSV2?: ZaloJSV2Interface;
  }
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Fix cho lỗi ZaloSX2 và zaloJSV2 không được định nghĩa
    if (typeof window !== "undefined") {
      // Khởi tạo ZaloSX2 nếu chưa tồn tại
      if (!window.ZaloSX2) {
        window.ZaloSX2 = {};
      }
      
      // Khởi tạo zaloJSV2 với các function cần thiết
      if (!window.zaloJSV2) {
        window.zaloJSV2 = {
          // Mock function để tránh lỗi "is not a function"
          zalo_h5_event_handler: function() {
            console.log('zalo_h5_event_handler called (mocked)');
            return true;
          },
          // Thêm các function khác nếu cần
          init: function() {
            console.log('zaloJSV2 init called (mocked)');
            return true;
          },
          ready: function(callback: () => void) {
            console.log('zaloJSV2 ready called (mocked)');
            if (typeof callback === 'function') {
              setTimeout(callback, 100);
            }
            return true;
          }
        };
      } else {
        // Nếu zaloJSV2 đã tồn tại nhưng thiếu function
        if (!window.zaloJSV2.zalo_h5_event_handler) {
          window.zaloJSV2.zalo_h5_event_handler = function() {
            console.log('zalo_h5_event_handler called (mocked)');
            return true;
          };
        }
      }

      // Ngăn chặn các lỗi Zalo khác
      const originalError = console.error;
      console.error = (...args) => {
        const errorMsg = args[0]?.toString() || '';
        if (errorMsg.includes('ZaloSX2') || 
            errorMsg.includes('zaloJSV2') || 
            errorMsg.includes('zalo_h5_event_handler')) {
          return; // Bỏ qua các lỗi Zalo
        }
        originalError.apply(console, args);
      };
    }
  }, []);

  return <>{children}</>;
}