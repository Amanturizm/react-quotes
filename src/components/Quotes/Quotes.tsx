import React, {useCallback, useEffect, useState} from 'react';
import QuoteItem from "../QuoteItem/QuoteItem";
import {Outlet, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {CATEGORIES} from "../../constants";

const Quotes: React.FC = () => {
  const { category } = useParams();

  const [quotes, setQuotes] = useState<IQuote[]>([]);

  let currentCategory: string = 'All';

  const fetchQuotes = useCallback(async () => {
    try {
      const endpoint = category ? `/quotes.json?orderBy="category"&equalTo="${category}"` : '/quotes.json';
      const { data } = await axiosApi.get<IResponseQuote>(endpoint);

      setQuotes(Object.keys(data).map(id => ({ ...data[id], id })));
    } catch (e) {
      console.error(e);
    }
  }, [category]);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  if (quotes.length) {
    CATEGORIES.forEach(CATEGORY => {
      if (CATEGORY.id === category) currentCategory = CATEGORY.title;
    });
  }

  return (
    <>
    <div className="d-flex flex-column gap-3 w-50">
      <h1>{currentCategory}</h1>

      {
        quotes.map(quote => <QuoteItem quote={quote} key={quote.id} />)
      }

    </div>
      <div className="position-fixed start-50 top-50 translate-middle bg-black rounded-5">
        <Outlet />
      </div>
    </>
  );
};

export default Quotes;