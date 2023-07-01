import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  quote: IQuote;
}

const QuoteItem: React.FC<Props> = ({ quote }) => {
  return (
    <div className="d-flex justify-content-between p-3 border border-2 border-white rounded-3">
      <div>
        <p>{quote.text}</p>
        <h6>- {quote.author}</h6>
      </div>

      <div className="d-flex gap-3" style={{ maxHeight: 40 }}>
        <Link to={quote.id} className="btn btn-outline-success">Edit</Link>
        <Link to={quote.id} className="btn btn-outline-danger">Delete</Link>
      </div>
    </div>
  );
};

export default QuoteItem;