import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import {CATEGORIES} from "../../constants";
import CloseBtn from "../CloseBtn/CloseBtn";

const QuoteForm = () => {
  const [quote, setQuote] = useState<IQuoteForm>({ category: '', author: '', text: '' });

  const changeValue = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    setQuote(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  // POST
  const navigate = useNavigate();

  const postData = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosApi.post('/quotes.json', quote);

      navigate('/quotes');
    } catch (e) {
      console.error(e);
    }
  };

  // EDIT
  const { category, id } = useParams();

  const getQuoteContent = useCallback(async (id: string) => {
    try {
      const { data } = await axiosApi.get<IQuote>(`/quotes/${id}.json`);

      setQuote({ category: data.category!, author: data.author, text: data.text });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (id) {
      void getQuoteContent(id);
    }
  }, [getQuoteContent, id]);

  const editData = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosApi.put(`/quotes/${id}.json`, quote);

      navigate('/quotes/' + quote.category);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={ id ? editData : postData } style={{ minWidth: 300 }} className="container w-50 p-4">
      <label htmlFor="select-category" className="form-label">Category</label>
      <select
        className="form-select mb-2"
        id="select-category"
        name="category"
        value={quote.category}
        onChange={changeValue}
      >
        <option value="" disabled hidden>Select category</option>
        {
          CATEGORIES.map(category => (
            <option
              key={'category' + category.id}
              className="text-black"
              value={category.id}
            >
              {category.title}
            </option>
          ))
        }
      </select>

      <label htmlFor="input-author" className="form-label">Author</label>
      <input
        name="author"
        id="input-author"
        type="text"
        className="form-control mb-2"
        value={quote.author}
        onChange={changeValue}
      />

      <label htmlFor="textarea-description" className="form-label">Text</label>
      <textarea
        name="text"
        id="textarea-text"
        cols={2}
        rows={3}
        className="form-control"
        value={quote.text}
        onChange={changeValue}
      />

      <button className="btn btn-outline-primary mt-3 px-4">
        { id ? 'Edit' : 'Send' }
      </button>

      { id ? <CloseBtn to={`/quotes/${category}`} /> : null }
      {/*{preloader}*/}
    </form>
  );
};

export default QuoteForm;