import { Fragment } from "react";
import { useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Zahra", text: "Learning React is fun!" },
  { id: "q2", author: "Max", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
