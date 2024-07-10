export interface BlockDetail {
  blockHeader: string;
  blockTitle: string;
  blockContent: string;
}

export interface Detail {
  title: string;
  content: string;
  blocks: BlockDetail[];
}
