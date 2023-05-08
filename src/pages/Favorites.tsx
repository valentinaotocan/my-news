import { useContext } from "react";
import { FavoritesContext } from "../components/context/FavoritesContext";
import Card from "../components/Card";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  const sortedFavoritesFromNew = [...favorites].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <div className="pl-small w-100">
        <h2 className="news-title inter-v inter-v--semi">My Favorites</h2>
        <div className="cards">
          {sortedFavoritesFromNew.length > 0 ? (
            sortedFavoritesFromNew.map((article, index) => (
              <Card key={index} article={article} />
            ))
          ) : (
            <p className="clr-dark-orange inter-v">
              You don't have any favorite news!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
export default Favorites;
