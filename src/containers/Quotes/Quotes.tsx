import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import Categories from "../../components/Categories/Categories";
import QuoteItem from "../../components/QuoteItem/QuoteItem";

const Quotes = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  const fetchQuotes = useCallback(async () => {
    try {
      const { data } = await axiosApi.get<IResponseQuote>('/quotes.json');

      setQuotes(Object.keys(data).map(id => ({ ...data[id], id })));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  return (
    <div className="d-flex justify-content-between m-4">
      <Categories />

      <div className="d-flex flex-column gap-3 w-50">
        {
          quotes.map(quote => <QuoteItem quote={quote} key={quote.id} />)
        }
      </div>
    </div>
  );
};

export default Quotes;