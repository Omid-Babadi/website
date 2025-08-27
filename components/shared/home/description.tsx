"use client";

import React, { useEffect, useRef } from "react";
import { animate, scroll } from "motion";

const AIFutureSection: React.FC = () => {
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingRef.current) {
      scroll(
        animate(floatingRef.current, { y: [-100, 200] }, { easing: "easeInOut" }),
        {
          target: floatingRef.current,
          offset: ["start end", "end start"],
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      {/* Light blue square grid background */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(173, 216, 230, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(173, 216, 230, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Additional subtle light blue pattern for depth */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(135, 206, 250, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(135, 206, 250, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative glowing accents */}
      <div
        className="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "oklch(0.678 0.148 252.466)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-52 h-52 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "oklch(0.678 0.148 252.466)" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left side: Floating headline */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div
            ref={floatingRef}
            className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight text-gray-900 text-center md:text-left"
          >
            آینده{" "}
            <span style={{ color: "oklch(0.678 0.148 252.466)" }}>
              هوش مصنوعی
            </span>{" "}
            شما <br />
            در{" "}
            <span style={{ color: "oklch(0.678 0.148 252.466)" }}>
              دستان شماست.
            </span>
          </div>
        </div>

        {/* Right side: Content blocks */}
        <div className="w-full md:w-1/2 space-y-14">
          <div className="relative">
            {/* Enhanced blue circle shadows */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-40 bg-blue-300 z-0" />
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full blur-xl opacity-60 bg-blue-200 z-0" />
            <h3
              className="relative text-2xl font-semibold z-10"
              style={{ color: "oklch(0.678 0.148 252.466)" }}
            >
              هوش پیشرفته، سفارشی برای شما.
            </h3>
            <p className="mt-2 text-gray-700 flex items-start relative z-10">
              <span
                className="mr-2 text-lg"
                style={{ color: "oklch(0.678 0.148 252.466)" }}
              >
                →
              </span>
              هوش مصنوعی خود را بسازید؛ آموزش دهید، تقطیر کنید، تنظیم دقیق کنید و
              با بهترین مدل‌های منبع باز جهان خلق کنید.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced blue circle shadows */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-40 bg-blue-300 z-0" />
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full blur-xl opacity-60 bg-blue-200 z-0" />
            <h3
              className="relative text-2xl font-semibold z-10"
              style={{ color: "oklch(0.678 0.148 252.466)" }}
            >
              درجه سازمانی. آماده برای عامل.
            </h3>
            <p className="mt-2 text-gray-700 flex items-start relative z-10">
              <span
                className="mr-2 text-lg"
                style={{ color: "oklch(0.678 0.148 252.466)" }}
              >
                →
              </span>
              عامل‌هایی را مستقر کنید که اجرا کنند، سازگار شوند و نتایج واقعی
              ارائه دهند؛ با ارکستراسیون قدرتمند و ایمنی.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced blue circle shadows */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-40 bg-blue-300 z-0" />
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full blur-xl opacity-60 bg-blue-200 z-0" />
            <h3
              className="relative text-2xl font-semibold z-10"
              style={{ color: "oklch(0.678 0.148 252.466)" }}
            >
              اولویت حریم خصوصی.
            </h3>
            <p className="mt-2 text-gray-700 flex items-start relative z-10">
              <span
                className="mr-2 text-lg"
                style={{ color: "oklch(0.678 0.148 252.466)" }}
              >
                →
              </span>
              هوش مصنوعی را در هر جایی مستقر کنید—در محل، ابر، لبه، دستگاه‌ها و
              بیشتر—در حالی که کنترل داده‌هایتان را حفظ می‌کنید.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced blue circle shadows */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-40 bg-blue-300 z-0" />
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full blur-xl opacity-60 bg-blue-200 z-0" />
            <h3
              className="relative text-2xl font-semibold z-10"
              style={{ color: "oklch(0.678 0.148 252.466)" }}
            >
              حل مسئله عمیق و تحویل ارزش.
            </h3>
            <p className="mt-2 text-gray-700 flex items-start relative z-10">
              <span
                className="mr-2 text-lg"
                style={{ color: "oklch(0.678 0.148 252.466)" }}
              >
                →
              </span>
              کمک عملی از بهترین دانشمندان کاربردی هوش مصنوعی جهان در سراسر
              استقرار، حل مسئله، ایمنی و فراتر از آن.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFutureSection;