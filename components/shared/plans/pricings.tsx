"use client";
import { useState } from "react";
import { Calendar, Sparkles, Check } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
interface CheckIconProps {
  isDark?: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({ isDark = false }) => (
  <div
    className={`relative flex items-center justify-center w-5 h-5 ${
      isDark ? "text-blue-300" : "text-blue-600"
    }`}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10"
    >
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (val: boolean) => void;
  isDark?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  enabled,
  onChange,
  isDark = false,
}) => (
  <div className="flex items-center gap-3">
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-10 items-center rounded-full transition-all duration-300 ease-out ${
        enabled
          ? isDark
            ? "bg-blue-400"
            : "bg-blue-600"
          : isDark
          ? "bg-blue-700"
          : "bg-blue-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full transition-all duration-300 ease-out ${
          enabled ? "translate-x-5" : "translate-x-1"
        } ${isDark ? (enabled ? "bg-blue-900" : "bg-blue-300") : "bg-white"}`}
      />
    </button>
    <span
      className={`text-sm font-medium ${
        isDark ? "text-blue-300" : "text-blue-600"
      }`}
    >
      تحویل سریع (۵ روزه)
    </span>
  </div>
);

export function PricingCards() {
  const [freeFastDelivery, setFreeFastDelivery] = useState<boolean>(false);
  const [proFastDelivery, setProFastDelivery] = useState<boolean>(false);
  const [teamFastDelivery, setTeamFastDelivery] = useState<boolean>(false);

  const freeFeatures: string[] = [
    "۲ طرح اولیه اختصاصی",
    "کدنویسی سفارشی",
    "تحویل به موقع",
  ];

  const proFeatures: string[] = [
    ...freeFeatures,
    "پشتیبانی مداوم",
    "انیمیشن‌های مدرن",
  ];

  const teamFeatures: string[] = [
    ...proFeatures,
    "داشبورد مدیریت",
    "API پیشرفته",
    "پشتیبانی ۲۴/۷",
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto text-center px-4 py-20 overflow-hidden mt-30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Section Title */}
      <div className="relative mb-16">
        <div className="absolute -inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent -z-10"></div>
        <h1 className="inline-flex items-center text-4xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-500 mb-10">
          <Sparkles className="ml-2 w-8 h-8 text-blue-500" />
          پلن‌های قیمت‌گذاری
        </h1>
        <p className="text-blue-600/90 text-lg leading-relaxed max-w-2xl mx-auto mt-10">
          بهترین پکیج‌های طراحی سایت را برای شما آماده کرده‌ایم. پلن مورد نظر خود را انتخاب کنید.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Free Card */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl p-[1px] shadow-2xl shadow-blue-500/10 border border-blue-200/50 flex flex-col">
          <div className="bg-white/80 backdrop-blur-sm rounded-[23px] p-8 flex-grow">
            <h2 className="text-2xl font-bold text-blue-800 mb-3 tracking-tight">
              رایگان
            </h2>
            <p className="text-blue-600/80 text-base leading-relaxed mb-8">
              مناسب برای پروژه‌های کوچک و آزمایشی.
            </p>
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-5xl font-bold text-blue-800 tracking-tighter">
                $۰
              </span>
              <span className="text-blue-500/70 text-lg ml-2">/دائمی</span>
            </div>
            <button className="relative w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 hover:-translate-y-0.5">
              شروع کنید
            </button>
          </div>
          <div className="bg-white/50 backdrop-blur-sm px-6 pb-6 pt-4 flex-grow flex flex-col rounded-[23px]">
            <div className="grid grid-cols-1 gap-y-4 mb-auto">
              {freeFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-blue-800/90 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ToggleSwitch
                enabled={freeFastDelivery}
                onChange={setFreeFastDelivery}
              />
            </div>
          </div>
        </div>

        {/* Pro Card */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl p-[1px] shadow-2xl shadow-blue-500/20 border border-blue-300/50 flex flex-col">
          <div className="bg-white/80 backdrop-blur-sm rounded-[23px] p-8 flex-grow">
            <h2 className="text-2xl font-bold text-blue-800 mb-3 tracking-tight">
              حرفه‌ای
            </h2>
            <p className="text-blue-600/80 text-base leading-relaxed mb-8">
              مناسب برای استارتاپ‌ها و کسب‌وکارهای متوسط.
            </p>
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-5xl font-bold text-blue-800 tracking-tighter">
                ۱۹۹۹$
              </span>
              <span className="text-blue-500/70 text-lg ml-2">/پرداخت ثابت</span>
            </div>
            <button className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 hover:-translate-y-0.5">
              خرید پلن
              <Calendar className="w-5 h-5 text-blue-200" />
            </button>
          </div>
          <div className="bg-white/50 backdrop-blur-sm px-6 pb-6 pt-4 flex-grow flex flex-col rounded-[23px]">
            <div className="grid grid-cols-1 gap-y-4 mb-auto">
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-blue-800/90 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ToggleSwitch
                enabled={proFastDelivery}
                onChange={setProFastDelivery}
              />
            </div>
          </div>
        </div>

        {/* Team Card */}
        <div className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 rounded-3xl p-[1px] shadow-2xl shadow-blue-900/30 flex flex-col">
          <div className="bg-gradient-to-b from-blue-800/80 to-blue-900/80 backdrop-blur-sm rounded-[23px] p-8 flex-grow">
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
              تیمی
            </h2>
            <p className="text-blue-200/80 text-base leading-relaxed mb-8">
              بهترین انتخاب برای شرکت‌ها و تیم‌های بزرگ.
            </p>
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-5xl font-bold text-white tracking-tighter">
                ۲۹۹۹$
              </span>
              <span className="text-blue-300/80 text-lg ml-2">/پرداخت ثابت</span>
            </div>
            <button className="relative w-full bg-gradient-to-b from-white to-blue-100 text-blue-900 py-4 rounded-xl font-semibold text-base hover:from-blue-100 hover:to-white transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/40 hover:-translate-y-0.5">
              خرید پلن
              <Calendar className="w-5 h-5 text-blue-500" />
            </button>
          </div>
          <div className="bg-blue-900/50 backdrop-blur-sm px-6 pb-6 pt-4 flex-grow flex flex-col rounded-[23px]">
            <div className="grid grid-cols-1 gap-y-4 mb-auto">
              {teamFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckIcon isDark={true} />
                  <span className="text-blue-100/90 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ToggleSwitch
                enabled={teamFastDelivery}
                onChange={setTeamFastDelivery}
                isDark={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {/* FAQ Section (Accordion) */}
      <div className="mt-20 text-right max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">سوالات متداول</h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1">
            <AccordionTrigger>آیا می‌توانم پلن خود را ارتقا دهم؟</AccordionTrigger>
            <AccordionContent>
              بله، شما می‌توانید هر زمان پلن خود را به سطح بالاتر ارتقا دهید و امکانات بیشتری دریافت کنید.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>چگونه پرداخت کنم؟</AccordionTrigger>
            <AccordionContent>
              پرداخت‌ها از طریق درگاه‌های امن بانکی و کارت‌های اعتباری پشتیبانی می‌شود.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>آیا پشتیبانی فنی دارید؟</AccordionTrigger>
            <AccordionContent>
              بله، تیم پشتیبانی ما به صورت ۲۴/۷ آماده پاسخگویی به شما است.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>چگونه از تخفیف‌ها استفاده کنم؟</AccordionTrigger>
            <AccordionContent>
              کد تخفیف خود را هنگام پرداخت وارد کنید تا مبلغ نهایی کاهش یابد.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
