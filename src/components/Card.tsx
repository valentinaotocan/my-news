import { Article } from "../types";
import defaultImage from "../assets/images/default-image.png";

interface CardProps {
  article: Article;
}

function Card({ article }: CardProps) {
  return (
    <article className="card">
      <img
        src={article.urlToImage || defaultImage}
        alt={article.title || "Default Image"}
      />
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
