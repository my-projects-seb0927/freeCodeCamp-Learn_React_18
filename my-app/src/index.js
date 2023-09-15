import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' 

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = 'Walter Isaacson'
const Book = () => {
  const title = 'Elon Musk';
  return (
    <article className='book'>
      <img
        src='./images/book-1.jpg'
        alt='Elon Musk'
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />); 