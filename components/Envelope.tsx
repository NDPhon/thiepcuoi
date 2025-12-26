import React from "react";
import { IMAGES } from "../constants";

interface EnvelopeProps {
  onOpen: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onClose }) => (
  <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${IMAGES.footer}')` }}
    />

    {/* Overlay giống Envelope */}
    <div className="absolute inset-0 bg-white/70"></div>

    <AnimatedSection className="relative z-10 text-center px-4 space-y-8">
      {/* Heading */}
      <div className="space-y-3">
        <h2 className="font-script text-6xl md:text-8xl text-sage-600">
          Thank You
        </h2>
        <div className="h-px w-24 bg-stone-400 mx-auto"></div>
      </div>

      {/* Sub text */}
      <p className="font-serif text-lg md:text-xl italic text-stone-600">
        Rất hân hạnh được đón tiếp!
      </p>

      {/* Close button – đồng bộ nút Open */}
      <div
        onClick={onClose}
        className="group cursor-pointer flex flex-col items-center gap-4 mt-12 animate-bounce"
        title="Đóng thiệp"
      >
        <div className="w-16 h-16 rounded-full border border-stone-400 flex items-center justify-center bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg
            className="h-8 w-8 text-sage-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
        <span className="text-sm tracking-widest text-stone-500 uppercase">
          - Đóng thiệp -
        </span>
      </div>
    </AnimatedSection>
  </section>
);
