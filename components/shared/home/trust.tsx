import React from 'react';

const SecurityPrivacyComponent: React.FC = () => {
  return (
    <div dir="rtl" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              امنیت و حریم خصوصی در سطح سازمانی
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              ما امنیت و رعایت قوانین را جدی می‌گیریم. محصول ما دارای نماد اعتماد الکترونیکی (اینماد) است و مورد اعتماد هزاران کسب‌وکار برای ساخت عوامل هوش مصنوعی امن و compliant.
            </p>
            <div className="flex items-center space-x-4 mb-8">
              {/* eNamad Badge Placeholder - Replace with actual embed code */}
              <a href="https://enamad.ir/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://trustseal.enamad.ir/logo.aspx" // Placeholder URL; replace with your actual eNamad image or script
                  alt="نماد اعتماد الکترونیکی"
                  className="w-24 h-24"
                />
              </a>
              {/* If you have the actual code, use it like this: */}
              {/* <img referrerPolicy="no-referrer" id="yourEnamadId" style={{cursor: 'pointer'}} onClick={() => window.open('https://trustseal.enamad.ir/?id=YOURID&Code=YOURCODE', 'Popup', 'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')} alt="" src="https://trustseal.enamad.ir/Verify.aspx?id=YOURID&Code=YOURCODE" /> */}
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                داده‌های شما متعلق به خودتان باقی می‌ماند
              </h2>
              <p className="text-gray-600">
                داده‌های شما فقط برای عامل هوش مصنوعی شما قابل دسترسی است و هرگز برای آموزش مدل‌ها استفاده نمی‌شود.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                رمزنگاری داده‌ها
              </h2>
              <p className="text-gray-600">
                تمام داده‌ها در حال استراحت و در حال انتقال رمزنگاری شده‌اند. ما از الگوریتم‌های رمزنگاری استاندارد صنعت استفاده می‌کنیم.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                یکپارچه‌سازی‌های امن
              </h2>
              <p className="text-gray-600">
                ما از متغیرهای تأییدشده استفاده می‌کنیم تا اطمینان حاصل شود کاربران فقط به داده‌های خود از سیستم‌های شما دسترسی دارند.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-600">
            محصول ما متعهد به حفاظت از داده‌های شما است.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            بیشتر بدانید &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecurityPrivacyComponent;