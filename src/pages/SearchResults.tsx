import { useContext } from "react";
import { SearchContext } from "../components/context/SearchContext";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

function SearchResults() {
  const { searchedResults, loading, error } = useContext(SearchContext);

  return (
    <>
      {!loading && !error && searchedResults.length === 0 && (
        <p className="clr-dark-orange inter-v">
          No results with the term(s) you have entered. Please try again with
          something else.
        </p>
      )}
      <div className="pl-small">
        <div className="cards">
          {typeof searchedResults !== "undefined" &&
            searchedResults.map((article, index) => {
              return <Card key={index} article={article} />;
            })}
          {loading && <Spinner />}
          {error && <Error />}
        </div>
      </div>
    </>
  );
}
export default SearchResults;
