import { BrowserRouter, Routes, Route } from "react-router-dom";
import OwnerId from "./pages/Owner";
import Article from "./pages/Article";
import CreateArticles from "./pages/CreateArticle";
import EditArticles from "./pages/Edit";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<OwnerId />} />
        <Route path="/:ownerId/create" element={<CreateArticles />} />
        <Route path="/articles/:articledId" element={<Article />} />
        <Route path="/articles/:articledId/edit" element={<EditArticles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
