export interface BlockDetail {
  blockHeader: string;
  blockTitle: string;
  blockContent: string;
}

export interface CarouselDetail {
  carouselContent: string;
  name: string;
}

export interface Detail {
  title: string;
  content: string;
  blocks: BlockDetail[];
  carousel: CarouselDetail[];
}

export interface Culture {
  title: string;
  content: string;
}

export interface Support {
  title: string;
  blocks: { blockTitle: string; blockContent: string }[];
}

export interface SubCarouselDetail {
  carouselTitle: string;
  carouselContent: string;
}

export interface SubCarousel {
  title: string;
  carousel: SubCarouselDetail[];
}
