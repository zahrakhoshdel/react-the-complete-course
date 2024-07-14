import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" replace />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
