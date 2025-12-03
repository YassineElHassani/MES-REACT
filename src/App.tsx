import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";
import Login from "./pages/Login";
import Cart from './pages/Cart';
import Filter from './pages/Filter';
import DemoHooksPage from './pages/DemoHooksPages';

export default function App() {
  return (
    <Routes>
      {/* Parent layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="article/:id" element={<ArticleDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="article/:id" element={<ArticleDetail />} />

        <Route
          path="create"
          element={
            <ProtectedRoute>
              <CreateArticle />
            </ProtectedRoute>
          }
        />

        <Route
          path="edit/:id"
          element={
            <ProtectedRoute>
              <EditArticle />
            </ProtectedRoute>
          }
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/filter" element={<Filter />} />

        <Route path="/mes5" element={<DemoHooksPage />} />

        <Route path="login" element={<Login />} />
        
        {/* Not found inside layout */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
