import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:categoryId" element={<Category />} />
          <Route path="/results" element={<SearchResults />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
