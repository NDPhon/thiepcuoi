import { WeddingData } from "./types";

// Using local images from public folder
// Added leading slash to ensure they load from the root public directory
export const IMAGES = {
  envelope: "1.jpg",
  groom: "/5.jpg", // Explicitly requested for groom
  bride: "/7.jpg", // Explicitly requested for bride
  coupleHero: "/2.jpg", // Section 1
  couplePortrait: "/3.jpg", // Section 4 middle photo
  gallery1: "/4.jpg",
  gallery2: "/6.jpg",
  gallery3: "/3.jpg",
  gallery4: "/4.jpg",
  gallery5: "/6.jpg",
  footer: "/1.jpg", // Section 8 - temporarily changed to 1.jpg
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
    day: 14,
    month: 12,
    year: 2025,
    dayOfWeek: "Chủ Nhật",
    lunarDate: "Tức Ngày 25 Tháng 10 Năm Ất Tỵ",
    time: "10:30",
  },
  location: {
    venue: "Nhà Hàng Tiệc Cưới Romance",
    address: "43 Trương Thiều, Hải Tiến, Phú Vang, Thành Phố Huế",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nhà+Hàng+Tiệc+Cưới+Romance+43+Trương+Thiều+Hải+Tiến+Phú+Vang+Thành+Phố+Huế",
  },
};
