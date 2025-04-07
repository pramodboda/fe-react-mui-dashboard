import { SwiperOptions } from "swiper/types";

export interface SwiperItem {
  id: number;
  content: React.ReactNode;
}

export type SwiperEffect = "slide" | "fade" | "cube" | "coverflow";

export interface SwiperConfig extends SwiperOptions {
  effect?: SwiperEffect;
  customPagination?: boolean;
}
