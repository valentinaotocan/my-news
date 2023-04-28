import { useContext } from "react";
import { FavoritesContext } from "../components/context/FavoritesContext";
import { SearchContext } from "../components/context/SearchContext";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

function SearchResults() {
  const { favoritesChecker, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { searchedResults, loading, error } = useContext(SearchContext);

  return (
    <>
      <div className="pl-small w-100">
        {!loading && !error && searchedResults.length === 0 && (
          <p className="clr-dark-orange inter-v text-center">
            No results with the term(s) you have entered. Please try again with
            something else.
          </p>
        )}
        <div className="cards">
          {typeof searchedResults !== "undefined" &&
            searchedResults.map((article, index) => {
              return (
                <Card
                  key={index}
                  article={article}
                  favoritesChecker={favoritesChecker}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              );
            })}
          {loading && <Spinner />}
          {error && <Error />}
        </div>
      </div>
    </>
  );
}
export default SearchResults;
