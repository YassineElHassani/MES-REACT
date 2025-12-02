import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Parent layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="article/:id" element={<ArticleDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Not found inside layout */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
