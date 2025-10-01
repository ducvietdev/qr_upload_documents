import fs from "fs";
import path from "path";
import Link from "next/link";
import { DownloadAllSection } from "./DownloadAllSection";

interface Props {
  params: Promise<{ id: string }>;
}

// Helper function to get file icon
function getFileIcon(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case '.pdf': return '📕';
    case '.doc':
    case '.docx': return '📄';
    case '.xls':
    case '.xlsx': return '📊';
    case '.ppt':
    case '.pptx': return '📋';
    case '.txt': return '📝';
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.gif': return '🖼️';
    case '.mp4':
    case '.avi':
    case '.mov': return '🎥';
    case '.mp3':
    case '.wav': return '🎵';
    case '.zip':
    case '.rar': return '📦';
    default: return '📄';
  }
}

// Helper function to format file size
function formatFileSize(filename: string, folderPath: string): string {
  try {
    const filePath = path.join(folderPath, filename);
    const stats = fs.statSync(filePath);
    const bytes = stats.size;
    
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  } catch {
    return 'N/A';
  }
}

export default async function SharePage({ params }: Props) {
  const { id } = await params;
  const folder = path.join(process.cwd(), "public", "files", id);
  let files: string[] = [];

  try {
    files = fs.readdirSync(folder);
  } catch (err) {
    console.error(err);
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl text-red-600">❌</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Không tìm thấy thư mục
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
              Thư mục không tồn tại
            </p>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-left mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-700">
                <strong>Kiểm tra:</strong> Thư mục <code className="bg-gray-200 px-2 py-1 rounded text-xs">public/files/{id}</code>
              </p>
            </div>
            <Link 
              href="/" 
              className="inline-block mt-4 sm:mt-6 w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              ← Quay về trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl text-yellow-600">📁</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Thư mục trống
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
              Thư mục chưa có tài liệu nào
            </p>
            <Link 
              href="/" 
              className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              ← Quay về trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-xl sm:text-2xl text-white">📂</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                  Tài liệu
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  {files.length} tài liệu có sẵn
                </p>
              </div>
            </div>
            {/* <Link 
              href="/" 
              className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm sm:text-base"
            >
              ← Trang chủ
            </Link> */}
          </div>
        </div>

        {/* Files Grid */}
        <div className="space-y-3 sm:space-y-4">
          {files.map((file, index) => (
            <div key={file} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-lg sm:text-xl">{getFileIcon(file)}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                        {file}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Kích thước: {formatFileSize(file, folder)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 ml-4">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      #{index + 1}
                    </span>
                    <a
                      href={`/files/${id}/${file}`}
                      download
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">�</span>
                      Tải xuống
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download All Section - Client Component */}
        <DownloadAllSection files={files} shareId={id} />
      </div>
    </div>
  );
}
