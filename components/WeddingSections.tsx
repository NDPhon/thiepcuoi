import React, { useEffect, useRef, useState } from 'react';
import { WeddingData } from '../types';
import { IMAGES } from '../constants';

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

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
    >
      {children}
    </div>
  );
};

// --- Section 1: Hero ---
export const HeroSection: React.FC<{ data: WeddingData }> = ({ data }) => (
  <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col items-center justify-center">
    <div className="absolute inset-0">
      <img src={IMAGES.coupleHero} alt="Couple Hero" className="w-full h-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 mt-[30vh]">
      <AnimatedSection>
        <p className="text-stone-700 tracking-[0.3em] uppercase text-sm mb-4 font-serif">We Are Getting Married</p>
        <h1 className="font-script text-7xl md:text-9xl text-stone-800 drop-shadow-sm mb-2">
          {data.bride.name} <span className="text-5xl">&</span> {data.groom.name}
        </h1>
        <p className="font-serif italic text-xl text-stone-600 mt-6">{data.date.year}</p>
      </AnimatedSection>
    </div>
  </section>
);

// --- Section 2: Family ---
export const FamilySection: React.FC<{ data: WeddingData }> = ({ data }) => (
  <section className="py-20 px-4 max-w-5xl mx-auto bg-white/50 rounded-3xl my-10 shadow-sm border border-stone-100 relative overflow-hidden">
     {/* Decorative Leaves */}
     <div className="absolute top-0 left-0 w-32 -ml-10 -mt-10 opacity-30 rotate-180">
        <img src="https://img.freepik.com/free-vector/hand-drawn-olive-branch_23-2148028779.jpg" className="mix-blend-multiply" alt="leaf" />
     </div>
     <div className="absolute bottom-0 right-0 w-32 -mr-10 -mb-10 opacity-30">
        <img src="https://img.freepik.com/free-vector/hand-drawn-olive-branch_23-2148028779.jpg" className="mix-blend-multiply" alt="leaf" />
     </div>

    <AnimatedSection className="text-center">
      <div className="border-l-2 border-sage-400 pl-6 inline-block text-left mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-2 text-stone-800">Thư Mời Cưới</h2>
        <p className="text-stone-500 font-sans tracking-wide">Trân trọng kính mời quý khách</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        <div className="text-center md:text-right space-y-2">
            <h3 className="font-bold uppercase text-sage-800 text-sm tracking-widest mb-4">Nhà Gái</h3>
            <p className="font-serif text-xl md:text-2xl text-stone-700">{data.bride.parents.father}</p>
            <p className="font-serif text-xl md:text-2xl text-stone-700">{data.bride.parents.mother}</p>
        </div>
        
        {/* Divider for mobile, hidden on desktop or styled differently */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300 transform -translate-x-1/2"></div>
        <div className="md:hidden w-16 h-px bg-stone-300 mx-auto my-4"></div>

        <div className="text-center md:text-left space-y-2">
            <h3 className="font-bold uppercase text-sage-800 text-sm tracking-widest mb-4">Nhà Trai</h3>
            <p className="font-serif text-xl md:text-2xl text-stone-700">{data.groom.parents.father}</p>
            <p className="font-serif text-xl md:text-2xl text-stone-700">{data.groom.parents.mother}</p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// --- Section 3: Couple Portrait ---
export const CoupleSection: React.FC<{ data: WeddingData }> = ({ data }) => (
  <section className="py-12 text-center max-w-4xl mx-auto px-4">
    <AnimatedSection>
      <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">
        Trân Trọng Báo Tin Lễ Vu Quy Của
      </h2>
      <div className="font-script text-6xl md:text-7xl text-sage-700 mb-4">
        {data.bride.name}
      </div>
      <div className="font-script text-4xl text-stone-400 mb-4">&</div>
      <div className="font-script text-6xl md:text-7xl text-sage-700 mb-12">
        {data.groom.name}
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="overflow-hidden rounded-t-[10rem] border-4 border-sage-100 shadow-xl">
           <img src={data.groom.image} alt="Groom" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="overflow-hidden rounded-t-[10rem] border-4 border-sage-100 shadow-xl md:mt-20">
           <img src={data.bride.image} alt="Bride" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// --- Section 4: Event Details + Gallery Preview ---
export const EventDetailsSection: React.FC<{ data: WeddingData }> = ({ data }) => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-4xl text-stone-800 mb-8">Trân Trọng Kính Mời</h2>
        </AnimatedSection>
        
        {/* 3 Photos Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <AnimatedSection className="delay-100 h-96 overflow-hidden bg-stone-200 p-2 shadow-md rotate-[-2deg]">
                 <img src={IMAGES.gallery1} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Moment 1" />
            </AnimatedSection>
            <AnimatedSection className="delay-200 h-96 overflow-hidden bg-stone-200 p-2 shadow-md z-10 scale-105">
                 <img src={IMAGES.couplePortrait} className="w-full h-full object-cover" alt="Moment 2" />
            </AnimatedSection>
            <AnimatedSection className="delay-300 h-96 overflow-hidden bg-stone-200 p-2 shadow-md rotate-[2deg]">
                 <img src={IMAGES.gallery2} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Moment 3" />
            </AnimatedSection>
        </div>

        {/* Card Info */}
        <AnimatedSection>
            <div className="bg-[#eff2ef] rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-inner border border-white">
                <h3 className="font-bold uppercase tracking-widest text-lg md:text-xl mb-6 text-stone-800">Tiệc Mừng Lễ Vu Quy</h3>
                
                <div className="flex justify-center items-center gap-4 text-xl md:text-2xl font-serif text-stone-700 mb-6">
                    <span>{data.date.time}</span>
                    <span>-</span>
                    <span>{data.date.dayOfWeek}</span>
                </div>

                <div className="flex justify-center items-baseline gap-2 font-bold text-sage-800 mb-4">
                    <span className="text-5xl md:text-6xl tracking-widest">{data.date.day} . {data.date.month} . {data.date.year}</span>
                </div>

                <p className="italic text-stone-500 font-serif text-lg mb-8">
                    ({data.date.lunarDate})
                </p>

                <div className="h-px w-1/2 bg-stone-300 mx-auto mb-8"></div>

                <h4 className="text-lg font-semibold text-stone-800">Tại {data.location.venue}</h4>
            </div>
        </AnimatedSection>
    </div>
  </section>
);

// --- Section 5: Calendar ---
export const CalendarSection: React.FC<{ date: WeddingData['date'] }> = ({ date }) => {
    // Generate simple calendar grid for Dec 2025
    // Dec 1, 2025 is a Monday.
    const daysInMonth = 31;
    const startDay = 1; // Monday (0=Sun, 1=Mon...)
    
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
        <section className="py-16 px-4 bg-white">
            <AnimatedSection className="max-w-md mx-auto text-center">
                <h2 className="font-serif text-3xl uppercase tracking-widest mb-2">Save The Date</h2>
                <p className="font-serif italic text-xl mb-8">Tháng {date.month} - {date.year}</p>

                <div className="bg-[#f4f7f4] p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-7 gap-2 mb-4">
                        {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((d, i) => (
                             <div key={i} className={`font-bold text-stone-600 ${i===0 || i===6 ? 'text-sage-600' : ''}`}>{d}</div>
                        ))}
                    </div>
                    <div className="w-full h-px bg-stone-300 mb-4"></div>
                    {weeks.map((week, i) => (
                        <div key={i} className="grid grid-cols-7 gap-2 mb-2 text-stone-600 font-sans">
                            {week.map((d, j) => {
                                const isEventDay = d === date.day;
                                return (
                                    <div key={j} className="flex items-center justify-center relative h-10">
                                        {d && (
                                            <>
                                              {isEventDay && (
                                                  <div className="absolute inset-0 flex items-center justify-center">
                                                      <svg className="w-10 h-10 text-sage-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                      </svg>
                                                  </div>
                                              )}
                                              <span className={`relative z-10 ${isEventDay ? 'text-white font-bold' : ''}`}>{d}</span>
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
export const LocationSection: React.FC<{ location: WeddingData['location'] }> = ({ location }) => (
    <section className="py-20 px-4 bg-[#e3ebe3]/30">
        <AnimatedSection className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-sage-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            
            <h2 className="font-serif text-4xl text-stone-800">Địa Điểm Tổ Chức</h2>
            
            <div className="space-y-2">
                <h3 className="font-bold text-xl uppercase text-sage-800">{location.venue}</h3>
                <p className="text-stone-600 max-w-xs mx-auto text-lg">{location.address}</p>
            </div>

            <a 
                href={location.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block mt-8 px-8 py-3 bg-sage-600 text-white font-bold rounded-full hover:bg-sage-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Xem Bản Đồ
            </a>
        </AnimatedSection>
    </section>
);

// --- Section 7: Gallery ---
export const GallerySection: React.FC = () => (
    <section className="py-20 px-4">
        <AnimatedSection className="max-w-6xl mx-auto">
             <h2 className="font-script text-6xl text-center text-sage-700 mb-12">Album Hình Cưới</h2>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                 <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                     <img src={IMAGES.coupleHero} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 1" />
                 </div>
                 <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
                     <img src={IMAGES.gallery3} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 2" />
                 </div>
                 <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
                     <img src={IMAGES.gallery4} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 3" />
                 </div>
                 <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
                     <img src={IMAGES.gallery5} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 4" />
                 </div>
                 <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
                     <img src={IMAGES.gallery2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 5" />
                 </div>
                 <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
                     <img src={IMAGES.gallery1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 6" />
                 </div>
             </div>
        </AnimatedSection>
    </section>
);

// --- Section 8: Footer ---
export const FooterSection: React.FC = () => (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <img src={IMAGES.footer} alt="Thank you" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <AnimatedSection className="relative z-10 text-center text-white px-4">
             <h2 className="font-script text-7xl md:text-9xl mb-4">Thank You</h2>
             <p className="font-serif text-xl md:text-2xl italic opacity-90">Rất hân hạnh được đón tiếp!</p>
             <div className="mt-8 border border-white/50 inline-block p-4 rounded-full animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
             </div>
        </AnimatedSection>
    </section>
);