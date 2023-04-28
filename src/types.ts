export interface Article {
  title: string;
  urlToImage: string;
  author: string;
  url: string;
  category: string;
  publishedAt?: string;
}

export interface NavbarItems {
  to: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  content: string;
}

export interface LatestNews {
  title: string;
  publishedAt: string;
}

export interface SearchContextType {
  searchedResults: Article[];
  setSearchedResults: React.Dispatch<React.SetStateAction<Article[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextProviderType {
  children: React.ReactNode;
}

export interface FavoritesContextType {
  favorites: Article[];
  addToFavorites: (article: Article) => void;
  removeFromFavorites: (article: Article) => void;
}
