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

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img src='./images/book-1.jpg' alt='Elon Musk' />
);
const Title = () => <h2>Elon Musk</h2>
const Author = () => {
  return <h4>Walter Isaacson</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />); 