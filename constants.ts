import { WeddingData } from './types';

// Using picsum for placeholders, but setup for real images
export const IMAGES = {
  envelope: "https://images.unsplash.com/photo-1544124376-79919f12d88d?q=80&w=1200&auto=format&fit=crop",
  groom: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", // Placeholder
  bride: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop", // Placeholder
  coupleHero: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop", // Section 1
  couplePortrait: "https://images.unsplash.com/photo-1623947159756-c73e13d94186?q=80&w=1000&auto=format&fit=crop", // Section 3
  gallery1: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  gallery2: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=600&auto=format&fit=crop",
  gallery3: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
  gallery4: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=600&auto=format&fit=crop",
  gallery5: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=600&auto=format&fit=crop",
  footer: "https://images.unsplash.com/photo-1532712938310-34cb3958d674?q=80&w=1200&auto=format&fit=crop"
};

export const WEDDING_DATA: WeddingData = {
  groom: {
    name: "Trung Hiếu",
    parents: {
      father: "Ông Đặng Văn Nam",
      mother: "Bà Đỗ Thanh Huyền"
    },
    image: IMAGES.groom
  },
  bride: {
    name: "Quỳnh Nhi",
    parents: {
      father: "Ông Trương Phú",
      mother: "Bà Mai Thị Thu Hằng"
    },
    image: IMAGES.bride
  },
  date: {
    day: 14,
    month: 12,
    year: 2025,
    dayOfWeek: "Chủ Nhật",
    lunarDate: "Tức Ngày 25 Tháng 10 Năm Ất Tỵ",
    time: "10:30"
  },
  location: {
    venue: "Nhà Hàng Tiệc Cưới Romance",
    address: "43 Trương Thiều, Hải Tiến, Phú Vang, Thành Phố Huế",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nhà+Hàng+Tiệc+Cưới+Romance+43+Trương+Thiều+Hải+Tiến+Phú+Vang+Thành+Phố+Huế"
  }
};