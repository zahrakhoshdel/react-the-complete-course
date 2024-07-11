import { Fragment } from "react";
import { useParams, Outlet } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page </h1>
      <p>{params.quoteId}</p>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
