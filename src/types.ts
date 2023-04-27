export interface Article {
  title: string;
  urlToImage: string;
  author: string;
  url: string;
  category: string;
  publishedAt?: string;
}

export interface LatestNews {
  title: string;
  publishedAt: string;
}
