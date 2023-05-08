import { useState, useEffect } from "react";
import { Article } from "../types";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Card from "../components/Card";
import Latest from "../components/Latest";

const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const categories = [
      "general",
      "business",
      "health",
      "science",
      "sports",
      "technology",
    ];
    const fetchData = async () => {
      setLoading(true);
      try {
        const allArticles: Article[] = [];
        await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(
              `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=5&apiKey=${apiKey}`
            );
            if (response.ok) {
              const data = await response.json();
              const articlesWithCategory = data.articles.map(
                (article: Article) => ({ ...article, category })
              );
              allArticles.push(...articlesWithCategory);
              setError(false);
            } else {
              setError(true);
            }
          })
        );
        const withoutDuplicates = allArticles.filter(
          (article: Article, index: number, arr: Article[]) =>
            index === arr.findIndex((arr) => arr.title === article.title)
        );
        const sortArticles = withoutDuplicates.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
        const last16Articles = sortArticles.slice(0, 16);
        setNews(last16Articles);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="homepage pl-small">
      {/* for desktop */}
      <h2 className="news-title inter-v inter-v--semi">News</h2>
      <div className="homepage__cards">
        {loading && <Spinner />}
        {error && <Error />}
        <Latest />
        {news.map((article) => (
          <Card key={article.url} article={article} />
        ))}
      </div>

      {/* for small screens */}
      <div className="homepage__small-screens">
        <div className="homepage__small-screens__tabs">
          <button
            className={
              tabIndex === 0 ? "tab tab--active" : "tab tab--not-active"
            }
            onClick={() => setTabIndex(0)}
          >
            Featured
          </button>
          <button
            className={
              tabIndex === 1 ? "tab tab--active" : "tab tab--not-active"
            }
            onClick={() => setTabIndex(1)}
          >
            Latest
          </button>
        </div>
        {tabIndex === 0 && (
          <div className="homepage__small-screens__cards">
            {loading && <Spinner />}
            {error && <Error />}
            {news.map((article) => (
              <Card key={article.url} article={article} />
            ))}
          </div>
        )}
        <div className="homepage__small-screens__latest">
          {tabIndex === 1 && <Latest />}
        </div>
      </div>
    </section>
  );
}
export default Home;
