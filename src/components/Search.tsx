import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchContext } from "../components/context/SearchContext";
import { ReactComponent as SearchIcon } from "../assets/images/icons/search.svg";
import { Article } from "../types";

const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setLoading, setError, setSearchedResults } =
    useContext(SearchContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async () => {
    navigate("/results");
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm}&searchIn=title&sortBy=publishedAt&language=en&pageSize=10&apiKey=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        const filteredPosts = data.articles.filter((post: Article) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const removeDuplicates = filteredPosts.filter(
          (post: Article, index: number, arr: Article[]) =>
            index === arr.findIndex((arr) => arr.title === post.title)
        );
        setSearchedResults(removeDuplicates);
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (location.pathname !== "/results") {
      setSearchTerm("");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="search">
        <h1 className="inter">
          <span className="clr-dark-orange">My</span>News
        </h1>

        <div className="search__container">
          <SearchIcon className="search__container__icon" />
          <input
            type="text"
            placeholder="Search News"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="inter-v w-100"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="btn btn--red inter-v inter-v--bold"
          >
            Search
          </button>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
export default Search;
