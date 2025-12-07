import React, { useState, useRef } from "react";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { Envelope } from "./components/Envelope";
import {
  HeroSection,
  FamilySection,
  CoupleSection,
  EventDetailsSection,
  CalendarSection,
  LocationSection,
  GallerySection,
  FooterSection,
} from "./components/WeddingSections";
import { WEDDING_DATA } from "./constants";

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    // 1. Play audio immediately within the click event handler
    // This satisfies browser autoplay policies because it's a direct user interaction
    if (audioRef.current) {
      // Set volume to 50% for a pleasant start
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Audio play failed (browser policy):", error);
        });
      }
    }

    // 2. Start animation
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
    // Scroll back to top when closing so it's ready for next open
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative font-sans text-stone-600">
      {/* Background Music Controller */}
      <BackgroundMusic audioRef={audioRef} isOpened={isOpened} />

      {/* Opening Animation / Envelope */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-1000 ease-in-out ${
          isOpened ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Envelope onOpen={handleOpen} />
      </div>

      {/* Main Content (Visible after scroll/open) */}
      <main
        className={`transition-opacity duration-1000 ${
          isOpened ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Section 1: Hero / Top Photo */}
        <HeroSection data={WEDDING_DATA} />

        {/* Section 2: Family Info */}
        <FamilySection data={WEDDING_DATA} />

        {/* Section 3: Couple Introduction */}
        <CoupleSection data={WEDDING_DATA} />

        {/* Section 4: Event Details */}
        <EventDetailsSection data={WEDDING_DATA} />

        {/* Section 5: Calendar */}
        <CalendarSection date={WEDDING_DATA.date} />

        {/* Section 6: Location */}
        <LocationSection location={WEDDING_DATA.location} />

        {/* Section 7: Album */}
        <GallerySection />

        {/* Section 8: Footer/Thanks */}
        <FooterSection onClose={handleClose} />
      </main>
    </div>
  );
};

export default App;
