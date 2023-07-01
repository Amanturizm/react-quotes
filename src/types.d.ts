interface ICategory {
  title: string;
  id: string;
}

interface IQuote {
  id: string;
  author: string;
  text: string;
  category?: string;
}

interface IResponseQuote {
  [id: string]: IQuote;
}

interface IQuoteForm {
  category: string;
  author: string;
  text: string;
}