import { useState, createContext } from "react";
import {
  Article,
  FavoritesContextType,
  ContextProviderType,
} from "../../types";

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesContextProvider = ({ children }: ContextProviderType) => {
  const initialFavorites: Article[] = localStorage.getItem("my-favorite")
    ? JSON.parse(localStorage.getItem("my-favorite")!)
    : [];
  const [favorites, setFavorites] = useState(initialFavorites);

  const addToFavorites = (article: Article) => {
    const myFavorites = [...favorites, article];
    setFavorites(myFavorites);
    localStorage.setItem("my-favorite", JSON.stringify(myFavorites));
  };

  const removeFromFavorites = (article: Article) => {
    const myFavorites = favorites.filter(
      (favorite) => favorite.url !== article.url
    );
    setFavorites(myFavorites);
    localStorage.setItem("my-favorite", JSON.stringify(myFavorites));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
