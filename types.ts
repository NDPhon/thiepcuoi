export interface Parent {
  father: string;
  mother: string;
}

export interface Couple {
  name: string;
  parents: Parent;
  image: string;
}

export interface Location {
  venue: string;
  address: string;
  mapUrl: string; // Google Maps link
}

export interface WeddingData {
  groom: Couple;
  bride: Couple;
  date: {
    day: number;
    month: number;
    year: number;
    dayOfWeek: string;
    lunarDate: string; // e.g., "25 Tháng 10 Năm Ất Tỵ"
    time: string;
  };
  location: Location;
}