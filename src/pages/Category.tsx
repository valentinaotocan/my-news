import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../components/context/FavoritesContext";
import { Article } from "../types";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Card from "../components/Card";

const apiKey = import.meta.env.VITE_API_KEY;

function Category() {
  const { categoryId } = useParams();
  const [categoryArticles, setCategoryArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { favoritesChecker, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${categoryId}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          setCategoryArticles(data.articles);
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryArticles();
  }, [categoryId]);

  return (
    <div className="pl-small w-100">
      <h2 className="news-title inter-v inter-v--semi">{categoryId}</h2>
      <div className="cards">
        {loading && <Spinner />}
        {error && <Error />}
        {categoryArticles.map((article, index) => (
          <Card
            key={index}
            article={article}
            favoritesChecker={favoritesChecker}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
