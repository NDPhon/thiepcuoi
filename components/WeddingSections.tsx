import React, { useEffect, useRef, useState } from "react";
import { WeddingData } from "../types";
import { IMAGES } from "../constants";

// --- Utility Hook for Animations ---
const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.2) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return isIntersecting;
};

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Section 1: Hero ---
export const HeroSection: React.FC<{ data: WeddingData }> = ({ data }) => (
  <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col items-center justify-center">
    <div className="absolute inset-0">
      {/* Changed to object-top to prioritize faces and prevent cropping heads */}
      <img
        src={IMAGES.coupleHero}
        alt="Couple Hero"
        className="w-full h-full object-cover object-top opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90"></div>
    </div>

    <div className="relative z-10 text-center px-4 mt-[35vh]">
      <AnimatedSection>
        <p className="text-stone-700 tracking-[0.3em] uppercase text-xs md:text-sm mb-4 font-serif">
          We Are Getting Married
        </p>
        {/* Shortened names: Thanh Thảo & Tấn Rin */}
        <h1 className="font-script text-5xl md:text-7xl text-stone-800 drop-shadow-sm mb-2">
          {data.groom.name.split(" ").slice(-2).join(" ")}{" "}
          <span className="text-3xl md:text-4xl">&</span>{" "}
          {data.bride.name.split(" ").slice(-2).join(" ")}
        </h1>
        <p className="font-serif italic text-lg text-stone-600 mt-4">
          {data.date.year}
        </p>
      </AnimatedSection>
    </div>
  </section>
);

// --- Section 2: Family ---
export const FamilySection: React.FC<{ data: WeddingData }> = ({ data }) => (
  <section className="py-16 px-4 max-w-5xl mx-auto bg-white/50 rounded-3xl my-8 shadow-sm border border-stone-100 relative overflow-hidden">
    <AnimatedSection className="text-center">
      <div className="border-l-2 border-sage-400 pl-6 inline-block text-left mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-2 text-stone-800">
          Thư Mời Cưới
        </h2>
        <p className="text-stone-500 font-sans tracking-wide text-sm">
          Trân trọng kính mời quý khách
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <div className="text-center md:text-right space-y-1">
          <h3 className="font-bold uppercase text-sage-800 text-xs tracking-widest mb-3">
            Nhà Gái
          </h3>
          <p className="font-serif text-lg md:text-xl text-stone-700">
            {data.bride.parents.father}
          </p>
          <p className="font-serif text-lg md:text-xl text-stone-700">
            {data.bride.parents.mother}
          </p>
        </div>

        {/* Divider for mobile, hidden on desktop or styled differently */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300 transform -translate-x-1/2"></div>
        <div className="md:hidden w-16 h-px bg-stone-300 mx-auto my-4"></div>

        <div className="text-center md:text-left space-y-1">
          <h3 className="font-bold uppercase text-sage-800 text-xs tracking-widest mb-3">
            Nhà Trai
          </h3>
          <p className="font-serif text-lg md:text-xl text-stone-700">
            {data.groom.parents.father}
          </p>
          <p className="font-serif text-lg md:text-xl text-stone-700">
            {data.groom.parents.mother}
          </p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// --- Section 3: Couple Portrait ---
export const CoupleSection: React.FC<{ data: WeddingData }> = ({ data }) => (
  <section className="py-10 text-center max-w-5xl mx-auto px-4">
    <AnimatedSection>
      <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-6">
        Trân Trọng Báo Tin Lễ Thành Hôn Của
      </h2>
      <div className="font-script text-5xl md:text-6xl text-sage-700 mb-2">
        {data.groom.name}
      </div>
      <div className="font-script text-3xl text-stone-400 mb-2">&</div>
      <div className="font-script text-5xl md:text-6xl text-sage-700 mb-10">
        {data.bride.name}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-12 px-4">
        {/* Fixed white space issue: Use relative container with aspect ratio + absolute image filling 100% */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-3xl border-4 border-sage-100 shadow-xl bg-sage-50">
          <img
            src={data.groom.image}
            alt="Groom"
            className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-3xl border-4 border-sage-100 shadow-xl md:mt-16 bg-sage-50">
          <img
            src={data.bride.image}
            alt="Bride"
            className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// --- Section 4: Event Details + Gallery Preview ---
export const EventDetailsSection: React.FC<{ data: WeddingData }> = ({
  data,
}) => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">
          Trân Trọng Kính Mời
        </h2>
      </AnimatedSection>

      {/* 3 Photos Layout - Removed fixed height h-96, used aspect-ratio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 px-4">
        <AnimatedSection className="delay-100 overflow-hidden bg-stone-200 p-2 shadow-md rotate-[-2deg]">
          <img
            src={IMAGES.moment1}
            className="w-full h-auto aspect-[3/4] object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            alt="Moment 1"
          />
        </AnimatedSection>
        <AnimatedSection className="delay-200 overflow-hidden bg-stone-200 p-2 shadow-md z-10 scale-105">
          <img
            src={IMAGES.couplePortrait}
            className="w-full h-auto aspect-[3/4] object-cover object-top"
            alt="Moment 2"
          />
        </AnimatedSection>
        <AnimatedSection className="delay-300 overflow-hidden bg-stone-200 p-2 shadow-md rotate-[2deg]">
          <img
            src={IMAGES.moment2}
            className="w-full h-auto aspect-[3/4] object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            alt="Moment 3"
          />
        </AnimatedSection>
      </div>

      {/* Card Info */}
      <AnimatedSection>
        <div className="bg-[#eff2ef] rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-inner border border-white">
          <h3 className="font-bold uppercase tracking-widest text-base md:text-lg mb-4 text-stone-800">
            Tiệc Mừng Lễ Thành Hôn
          </h3>

          <div className="flex justify-center items-center gap-3 text-lg md:text-xl font-serif text-stone-700 mb-4">
            <span>{data.date.time}</span>
            <span>-</span>
            <span>{data.date.dayOfWeek}</span>
          </div>

          <div className="flex justify-center items-baseline gap-2 font-bold text-sage-800 mb-2">
            <span className="text-4xl md:text-5xl tracking-widest">
              {String(data.date.day).padStart(2, "0")} .{" "}
              {String(data.date.month).padStart(2, "0")} . {data.date.year}
            </span>
          </div>

          <p className="italic text-stone-500 font-serif text-base mb-6">
            ({data.date.lunarDate})
          </p>

          <div className="h-px w-1/3 bg-stone-300 mx-auto mb-6"></div>

          <h4 className="text-base font-semibold text-stone-800">
            Tại {data.location.venue}
          </h4>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

// --- Section 5: Calendar ---
export const CalendarSection: React.FC<{ date: WeddingData["date"] }> = ({
  date,
}) => {
  // Generate simple calendar grid for Feb 2026
  // Feb 1, 2026 is a Sunday.
  const daysInMonth = 28;
  const startDay = 0; // Sunday (0=Sun, 1=Mon...)

  const weeks = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startDay) {
        week.push(null);
      } else if (day > daysInMonth) {
        week.push(null);
      } else {
        week.push(day);
        day++;
      }
    }
    weeks.push(week);
    if (day > daysInMonth) break;
  }

  return (
    <section className="py-12 px-4 bg-white">
      <AnimatedSection className="max-w-md mx-auto text-center">
        <h2 className="font-serif text-2xl uppercase tracking-widest mb-2">
          Save The Date
        </h2>
        <p className="font-serif italic text-lg mb-6">
          Tháng {date.month} - {date.year}
        </p>

        <div className="bg-[#f4f7f4] p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((d, i) => (
              <div
                key={i}
                className={`font-bold text-sm text-stone-600 ${
                  i === 0 || i === 6 ? "text-sage-600" : ""
                }`}
              >
                {d}
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-stone-300 mb-2"></div>
          {weeks.map((week, i) => (
            <div
              key={i}
              className="grid grid-cols-7 gap-2 mb-2 text-stone-600 font-sans text-sm"
            >
              {week.map((d, j) => {
                const isEventDay = d === date.day;
                return (
                  <div
                    key={j}
                    className="flex items-center justify-center relative h-8"
                  >
                    {d && (
                      <>
                        {isEventDay && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-sage-600 animate-pulse"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                        )}
                        <span
                          className={`relative z-10 ${
                            isEventDay ? "text-white font-bold" : ""
                          }`}
                        >
                          {d}
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

// --- Section 6: Location ---
export const LocationSection: React.FC<{
  location: WeddingData["location"];
}> = ({ location }) => (
  <section className="py-16 px-4 bg-[#e3ebe3]/30">
    <AnimatedSection className="max-w-2xl mx-auto text-center space-y-4">
      <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-6 h-6 text-sage-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      <h2 className="font-serif text-3xl text-stone-800">Địa Điểm Tổ Chức</h2>

      <div className="space-y-1">
        <h3 className="font-bold text-lg uppercase text-sage-800">
          {location.venue}
        </h3>
        <p className="text-stone-600 max-w-xs mx-auto text-base">
          {location.address}
        </p>
      </div>

      <a
        href={location.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 px-6 py-2 bg-sage-600 text-white font-bold rounded-full hover:bg-sage-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
      >
        Xem Bản Đồ
      </a>
    </AnimatedSection>
  </section>
);

// --- Section 7: Gallery ---
export const GallerySection: React.FC = () => (
  <section className="py-16 px-4">
    <AnimatedSection className="max-w-6xl mx-auto">
      <h2 className="font-script text-5xl text-center text-sage-700 mb-8">
        Album Hình Cưới
      </h2>

      {/* Switched to Masonry Layout (CSS Columns) to prevent cropping. 
                 Images will maintain their natural aspect ratio. */}
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        <div className="break-inside-avoid rounded-lg overflow-hidden mb-4">
          <img
            src={IMAGES.gallery4}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            alt="Gallery 1"
          />
        </div>

        <div className="break-inside-avoid rounded-lg overflow-hidden mb-4">
          <img
            src={IMAGES.gallery6}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            alt="Gallery 2"
          />
        </div>

        <div className="break-inside-avoid rounded-lg overflow-hidden mb-4">
          <img
            src={IMAGES.gallery3}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            alt="Gallery 3"
          />
        </div>

        <div className="break-inside-avoid rounded-lg overflow-hidden mb-4">
          <img
            src={IMAGES.gallery1}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            alt="Gallery 4"
          />
        </div>

        <div className="break-inside-avoid rounded-lg overflow-hidden mb-4">
          <img
            src={IMAGES.gallery2}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            alt="Gallery 5"
          />
        </div>

        <div className="break-inside-avoid rounded-lg overflow-hidden mb-4">
          <img
            src={IMAGES.gallery5}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            alt="Gallery 6"
          />
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// --- Section 8: Footer ---
interface FooterSectionProps {
  onClose?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onClose }) => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      {/* Added object-top to focus on faces if footer image has people */}
      <img
        src={IMAGES.footer}
        alt="Thank you"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    <AnimatedSection className="relative z-10 text-center text-white px-4">
      <h2 className="font-script text-6xl md:text-8xl mb-4">Thank You</h2>
      <p className="font-serif text-lg md:text-xl italic opacity-90">
        Rất hân hạnh được đón tiếp!
      </p>

      {/* Close Button / Back to Envelope */}
      <div
        onClick={onClose}
        className="mt-8 border border-white/50 inline-block p-4 rounded-full animate-bounce cursor-pointer hover:bg-white/10 transition-colors group"
        title="Đóng thiệp"
      >
        <svg
          className="w-6 h-6 transform group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
      <p className="text-xs uppercase tracking-widest mt-2 opacity-70">
        Đóng thiệp
      </p>
    </AnimatedSection>
  </section>
);
