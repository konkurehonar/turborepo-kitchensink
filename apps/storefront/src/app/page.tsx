export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          🎨 Tailwind Test - Storefront
        </h1>
        
        {/* تست کلاس‌های مختلف */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              کارت تست ۱
            </h2>
            <p className="text-gray-600">
              اگر این استایل‌ها کار می‌کنن، Tailwind آماده است!
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg text-white">
            <h2 className="text-xl font-semibold mb-2">
              گرادیانت تست
            </h2>
            <p>
              PostCSS و Autoprefixer هم کار می‌کنن!
            </p>
          </div>
        </div>

        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          دکمه تست
        </button>

        {/* تست responsive */}
        <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500">
          <p className="text-sm md:text-base lg:text-lg">
            تست Responsive: این متن در سایزهای مختلف تغییر می‌کنه
          </p>
        </div>
      </div>
    </div>
  );
}
