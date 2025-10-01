export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl text-white">📚</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              Hệ thống chia sẻ tài liệu điện tử
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 px-2">
              Truy cập nhanh chóng và an toàn đến các tài liệu học tập
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">📱</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">QR Code</h3>
            <p className="text-sm sm:text-base text-gray-600">Tạo mã QR để chia sẻ tài liệu nhanh chóng</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🔒</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Bảo mật</h3>
            <p className="text-sm sm:text-base text-gray-600">Hệ thống bảo mật thông tin theo tiêu chuẩn quân đội</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">⚡</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Nhanh chóng</h3>
            <p className="text-sm sm:text-base text-gray-600">Truy cập tức thì mọi lúc mọi nơi</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Truy cập hệ thống</h2>
            <div className="flex justify-center">
              <a 
                href="/qrcode" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">📱</span>
                Tạo QR Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}