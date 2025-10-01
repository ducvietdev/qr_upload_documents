"use client";
import Link from "next/link";

interface DownloadAllSectionProps {
  files: string[];
  shareId: string;
}

export function DownloadAllSection({ files, shareId }: DownloadAllSectionProps) {
  const handleDownloadAll = () => {
    // Tải xuống tất cả file bằng cách mở từng link
    files.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = `/files/${shareId}/${file}`;
        link.download = file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500); // Delay 500ms giữa các file
    });
  };

  return (
    <div className="mt-6 sm:mt-8">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Tải xuống tất cả
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Tải xuống toàn bộ {files.length} tài liệu cùng lúc
          </p>
        </div>
        
        {/* Download All Button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={handleDownloadAll}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors inline-flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📦</span>
            <span className="hidden xs:inline">Tải xuống tất cả ({files.length} tài liệu)</span>
            <span className="xs:hidden font-bold">Tải tất cả ({files.length})</span>
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors inline-flex items-center justify-center text-sm sm:text-base shadow-md hover:shadow-lg"
          >
            <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🏠</span>
            <span className="hidden xs:inline">Quay về trang chủ</span>
            <span className="xs:hidden">Trang chủ</span>
          </Link>
        </div>
        
        {/* Instructions */}
        <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 bg-blue-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-start">
            <span className="text-lg sm:text-xl mr-2 flex-shrink-0">💡</span>
            <div>
              <strong className="text-sm sm:text-base">Gợi ý:</strong>
              <ul className="mt-1 space-y-1 text-xs sm:text-sm">
                <li>• Nút <span className="font-semibold">&ldquo;Tải tất cả&rdquo;</span> sẽ tự động tải từng file</li>
                <li>• Hoặc tải từng file bằng nút <span className="font-semibold">&ldquo;↓&rdquo;</span> ở mỗi file</li>
                <li className="hidden sm:block">• Giữ Ctrl/Cmd khi nhấn để mở nhiều tab tải xuống</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}