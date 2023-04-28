import { useState, useEffect, useRef } from "react";
import { LatestNews, Article } from "../types";
import InfiniteScroll from "react-infinite-scroller";
import liveDot from "../assets/images/icons/live-dot.svg";
import arrow from "../assets/images/icons/arrow.svg";

const apiKey = import.meta.env.VITE_API_KEY;

function Latest() {
  const [latestNews, setLatestNews] = useState<LatestNews[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [errorLatest, setErrorLatest] = useState(false);

  const ref = useRef(null);

  async function fetchLatestNews() {
    try {
      const pageSize = 10;
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=latest&language=en&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.articles.length === 0) {
          setHasMore(false);
        } else {
          setLatestNews((prevNews) => {
            const newArticles = data.articles;
            const allArticles = [...prevNews, ...newArticles];
            const filterArticles = allArticles.filter(
              (article: Article, index: number, arr: Article[]) =>
                index ===
                arr.findIndex(
                  (arrArticle) => arrArticle.title === article.title
                )
            );
            return filterArticles;
          });
          setErrorLatest(false);
        }
      } else {
        setErrorLatest(true);
      }
    } catch (error) {
      setErrorLatest(true);
    }
  }

  useEffect(() => {
    fetchLatestNews();
  }, [page]);

  const loadMoreArticles = async () => {
    try {
      await fetchLatestNews();
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setErrorLatest(true);
    }
  };

  const getScrollParent = () => ref.current;

  return (
    <section className="latest">
      <div className="latest__header flex">
        <img src={liveDot} alt="Dot Icon" />
        <h2 className="inter-v inter-v--medium">Latest news</h2>
      </div>

      <div className="latest__infinite-container" ref={ref}>
        {!errorLatest && (
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMoreArticles}
            hasMore={hasMore}
            loader={
              <p className="clr-dark-orange inter-v" key={0}>
                Loading...
              </p>
            }
            getScrollParent={getScrollParent}
            useWindow={false}
          >
            {latestNews &&
              latestNews.map((item, index) => (
                <div key={index}>
                  <p className="date inter-v inter-v--bold">
                    {new Date(item.publishedAt).toLocaleTimeString([], {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <h3 className="subtitle inter-v inter-v--medium">
                    {item.title}
                  </h3>
                  <div className="smaller-line"></div>
                </div>
              ))}
          </InfiniteScroll>
        )}
        {errorLatest && (
          <p className="clr-dark-orange inter-v">
            Error fetching news <b>&#9785;</b>
          </p>
        )}
      </div>
      <div className="latest__bottom flex">
        <p className="latest__bottom__paragraph inter-v inter-v--medium">
          See all news
        </p>
        <img
          src={arrow}
          alt="Arrow Icon"
          className="latest__bottom__arrow flex"
        />
      </div>
    </section>
  );
}

export default Latest;
