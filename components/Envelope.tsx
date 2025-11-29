import React from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  return (
    <div className="w-full h-full bg-[#f0f4f0] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative floral corners */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 opacity-60">
             <img src="https://images.unsplash.com/photo-1587578335357-d35d2595fb0a?auto=format&fit=crop&w=400&q=80" alt="flower" className="w-full h-full object-cover rounded-br-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 opacity-60">
             <img src="https://images.unsplash.com/photo-1587578335357-d35d2595fb0a?auto=format&fit=crop&w=400&q=80" alt="flower" className="w-full h-full object-cover rounded-tl-full rotate-180" />
        </div>

      <div className="z-10 text-center space-y-8 p-4">
        <div className="space-y-2">
            <h3 className="text-xl md:text-2xl tracking-[0.2em] text-stone-600 font-serif uppercase">Thiệp Mời Cưới</h3>
            <div className="h-px w-24 bg-stone-400 mx-auto"></div>
        </div>

        <div className="font-script text-6xl md:text-8xl text-sage-600 animate-float">
          Lê Thị Thanh Thảo <br /> <span className="text-4xl text-stone-400">&</span> <br /> Nguyễn Tấn Rin
        </div>

        <div className="pt-8">
             <div className="text-6xl text-sage-800 mb-6 flex justify-center">
                 {/* Chinese Double Happiness Symbol stylized */}
                 <span className="border-4 border-sage-700 p-2 inline-block leading-none rounded-md opacity-80">
                    囍
                 </span>
             </div>
        </div>

        <div 
            onClick={onOpen}
            className="group cursor-pointer flex flex-col items-center gap-4 mt-12 animate-bounce"
        >
             <div className="w-16 h-16 rounded-full border border-stone-400 flex items-center justify-center bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
             </div>
             <span className="text-sm tracking-widest text-stone-500 uppercase">- Nhấp vào để mở thiệp -</span>
        </div>
      </div>
    </div>
  );
};