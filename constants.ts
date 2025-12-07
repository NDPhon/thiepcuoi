import { WeddingData } from "./types";

// Using local images from public folder
// Added leading slash to ensure they load from the root public directory
export const IMAGES = {
  envelope: "/1.jpg",
  groom: "/5.jpg", // Explicitly requested for groom
  bride: "/7.jpg", // Explicitly requested for bride
  coupleHero: "/2.jpg", // Section 1
  couplePortrait: "/3.jpg", // Section 4 middle photo
  moment1: "/4.jpg", // Section 4 left photo
  moment2: "/6.jpg", // Section 4 right photo

  gallery1: "/6.jpg",
  gallery2: "/9.jpg",
  gallery3: "/3.jpg",
  gallery4: "/8.jpg",
  gallery5: "/10.jpg",
  gallery6: "/4.jpg",
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
      "https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+An+An+Hu%E1%BA%BF/@16.5557052,107.6519405,17z/data=!3m1!4b1!4m6!3m5!1s0x31410adab12e9bb1:0x8f35495d7df5421d!8m2!3d16.5557052!4d107.6545154!16s%2Fg%2F11bwkfsqw7?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
  },
};
