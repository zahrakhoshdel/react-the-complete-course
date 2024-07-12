import { Fragment } from "react";
import { useParams, Outlet, Link, useResolvedPath } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Zahra", text: "Learning React is fun!" },
  { id: "q2", author: "Max", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const path = useResolvedPath();

  const showComments = path.pathname === `/quotes/${params.quoteId}`;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {showComments && (
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      )}

      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
