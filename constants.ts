import { WeddingData } from "./types";

// Using local images from public folder
// Added leading slash to ensure they load from the root public directory
export const IMAGES = {
  envelope: "/15.jpg",
  groom: "/1.jpg", // Explicitly requested for groom
  bride: "/2.jpg", // Explicitly requested for bride
  coupleHero: "/16.jpg", // Section 1
  couplePortrait: "/3.jpg", // Section 4 middle photo
  gallery1: "/7.jpg",
  gallery2: "/8.jpg",
  gallery3: "/9.jpg",
  gallery4: "/10.jpg",
  gallery5: "/11.jpg",
  gallery6: "/12.jpg",
  gallery7: "/13.jpg",
  gallery8: "/14.jpg",
  footer: "/17.jpg", // Section 8 - temporarily changed to 1.jpg,
  coupleLeft: "/4.jpg", // New image for couple left
  coupleRight: "/5.jpg", // New image forcouple right
};

export const WEDDING_DATA: WeddingData = {
  groom: {
    name: "Nguyễn Tấn Rin",
    parents: {
      father: "Ông Nguyễn Tấn Phúc",
      mother: "Bà Nguyễn Thị Minh",
    },
    image: IMAGES.groom,
  },
  bride: {
    name: "Lê Thị Thanh Thảo",
    parents: {
      father: "Ông Lê Thanh Quang",
      mother: "Bà Lê Thị Hoa",
    },
    image: IMAGES.bride,
  },
  date: {
    day: 6,
    month: 2,
    year: 2026,
    dayOfWeek: "Thứ Sáu",
    lunarDate: "Tức Ngày 19 Tháng 12 Năm Ất Tỵ",
    time: "11:00",
  },
  location: {
    venue: "Nhà Hàng Tiệc Cưới An An",
    address: "Thành Phố Huế", // Updated generic address as user didn't specify street
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nhà+Hàng+Tiệc+Cưới+An+An+Huế",
  },
};
