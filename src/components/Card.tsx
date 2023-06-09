import { useContext } from "react";
import { FavoritesContext } from "./context/FavoritesContext";
import { ReactComponent as StarIcon } from "../assets/images/icons/star.svg";
import { CardProps } from "../types";
import defaultImage from "../assets/images/default-image.png";

function Card({ article }: CardProps) {
  const { favoritesChecker, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  return (
    <article className="card">
      <img
        src={article.urlToImage || defaultImage}
        alt={article.title || "Default Image"}
        onError={(e) => (e.currentTarget.src = defaultImage)}
      />
      {favoritesChecker(article) ? (
        <button
          onClick={() => removeFromFavorites(article)}
          className="card__star card__star--yellow"
        >
          <StarIcon />
        </button>
      ) : (
        <button
          onClick={() => addToFavorites(article)}
          className="card__star card__star--black"
        >
          <StarIcon />
        </button>
      )}

      <div className="card__text">
        <p className="card__text__category inter-v inter-v--bold">
          {article.category}
        </p>
        <h3 className="card__text__title inter-v inter-v--medium">
          {article.title}
        </h3>
        <p className="card__text__author inter-v">{article.author}</p>
      </div>
    </article>
  );
}
export default Card;
