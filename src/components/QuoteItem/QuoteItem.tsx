import React from 'react';
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  quote: IQuote;
}

const QuoteItem: React.FC<Props> = ({ quote }) => {
  const deleteQuote = async () => {
    try {
      await axiosApi.delete(`/quotes/${quote.id}.json`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="d-flex justify-content-between p-3 border border-2 border-white rounded-3">
      <div>
        <p>{quote.text}</p>
        <h6>- {quote.author}</h6>
      </div>

      <div className="d-flex gap-3" style={{ maxHeight: 40 }}>
        <Link to={`/quotes/${quote.category}/${quote.id}`} className="btn btn-outline-success">Edit</Link>
        <button onClick={deleteQuote} className="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  );
};

export default QuoteItem;