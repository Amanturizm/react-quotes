interface ICategory {
  title: string;
  id: string;
}

interface IQuote {
  id: string;
  author: string;
  text: string;
}

interface IResponseQuote {
  [id: string]: IQuote;
}