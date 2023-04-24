import { useState } from "react";
import { Article } from "../types";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section>
      <h2>News</h2>
    </section>
  );
}
export default Home;
