import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  quote: IQuote;
}

const QuoteItem: React.FC<Props> = ({ quote }) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const deleteQuote = async () => {
    setLoading(true);

    try {
      await axiosApi.delete(`/quotes/${quote.id}.json`);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  const confirm = showConfirm ? (
    <div className="position-fixed top-50 translate-middle bg-black rounded-4 p-4">
      Вы действительно хотите удалить цитату?
      <div className="d-flex justify-content-end gap-2 mt-3">
        <button onClick={() => deleteQuote()} className="btn btn-danger">Да</button>
        <button onClick={() => setShowConfirm(false)} className="btn btn-primary">Нет</button>
      </div>
    </div>
  ) : null;

  const preloader = loading ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : null;

  return (
    <div className="d-flex justify-content-between p-3 border border-2 border-white rounded-3">
      <div>
        <p>"{quote.text}"</p>
        <h6>- {quote.author}</h6>
      </div>

      <div className="d-flex gap-3 ms-2" style={{ maxHeight: 40 }}>
        <Link to={`/quotes/${quote.category}/${quote.id}`} className="btn btn-outline-success">Edit</Link>
        <button onClick={() => setShowConfirm(true)} className="btn btn-outline-danger">Delete</button>
      </div>
      {confirm}
      {preloader}
    </div>
  );
};

export default QuoteItem;