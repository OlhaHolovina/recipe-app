import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RecipesDataList from "../components/RecipesDataList";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cuisine/:type"
        element={<RecipesDataList />}
      />
    </Routes>
  );
}

export default Pages;
