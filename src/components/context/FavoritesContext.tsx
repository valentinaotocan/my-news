import { useState, createContext } from "react";
import {
  Article,
  FavoritesContextType,
  ContextProviderType,
} from "../../types";

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  favoritesChecker: () => false,
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesContextProvider = ({ children }: ContextProviderType) => {
  const initialValue: Article[] = localStorage.getItem("my-favorite")
    ? JSON.parse(localStorage.getItem("my-favorite")!)
    : [];
  const [favorites, setFavorites] = useState(initialValue);

  const favoritesChecker = (article: Article) => {
    return favorites.map((fav) => fav.url).includes(article.url);
  };

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
      value={{
        favorites,
        favoritesChecker,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
