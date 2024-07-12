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
